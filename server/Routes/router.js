const express = require("express");
const Center = require("../Schema/center");
const OpenData = require("../Schema/openData")
const routes = express.Router();
const bcrypt = require("bcryptjs")
const CenterAuth = require("../auth/centerAuth");
const { ObjectId } = require("mongodb");

routes.get("/", (req, res) => {
    res.send("Hello from Routes")
})


routes.get("/centerhome", CenterAuth, async (req, res) => {
    res.send(req.rootUser)
})


routes.post("/centerregister", async (req, res) => {
    const { centerName, address, number, password } = req.body;
    const Open_Id = new ObjectId;
    try {
        if (!centerName) {
            return res.status(401).json("Empty")
        }
        const alreadyCenter = await Center.findOne({ centerName: centerName })
        if (alreadyCenter) {
            return res.status(400).json({ error: "Center Already Exist" })
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const newCenter = new Center({ centerName, address, number, password: hashPassword, Open_Id })
            const addBlood = new OpenData({ centerName, address, number, Open_Id })
            addBlood.save();
            newCenter.save();

            res.status(200).json(newCenter)
        }
    } catch (error) {
        console.log(error);
    }
})

routes.post("/Login", async (req, res) => {
    const { centerName, password } = req.body;
    try {
        if (!centerName || !password) {
            return res.status(401).json("Empty")
        }
        else {
            const CenterNa = await Center.findOne({ centerName: centerName })
            if (CenterNa) {
                const comparePass = await bcrypt.compare(password, CenterNa.password)
                // console.log(comparePass);  
                if (comparePass) {
                    const token = await CenterNa.generateAuthToken();
                    res.cookie("jwtoken", token)
                    res.status(200).json("Successfull");
                }
                else {
                    return res.status(400).json("Wrong Password")
                }
            }
            else {
                return res.status(400).json("User Not Present")
            }
        }
    } catch (error) {
        console.log(error);
    }
})




routes.post("/addblood", CenterAuth, async (req, res) => {
    const { a_Plus, a_Minus, b_Plus, b_Minus, ab_Plus, ab_Minus, o_Plus, o_Minus } = req.body;
    try {
        if (!a_Plus || !a_Minus || !b_Plus || !b_Minus || !ab_Plus || !ab_Minus || !o_Plus || !o_Minus) {
            return res.status(401).json("Empty")
        }
        const findCenter = await Center.findOne({ _id: req.userId })
        if (findCenter) {
            findCenter.bloodGroup = { a_Plus, a_Minus, b_Plus, b_Minus, ab_Plus, ab_Minus, o_Plus, o_Minus }
            const blood = await OpenData.updateOne({ Open_Id: req.rootUser.Open_Id }, { $set: { a_Plus, a_Minus, b_Plus, b_Minus, ab_Plus, ab_Minus, o_Plus, o_Minus } })
            findCenter.save();
            res.status(200).json("Successfull");
        }
    } catch (error) {
        console.log(error);
    }
})

routes.get("/logout",(req,res)=>{
    res.clearCookie("jwtoken",{path:"/"})
    res.status(200).json("Logout Successfull");
})
module.exports = routes;