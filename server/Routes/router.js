const express = require("express");
const Center = require("../Schema/center");
const routes = express.Router();
const bcrypt = require("bcryptjs")

routes.get("/", (req, res) => {
    res.send("Hello from Routes")
})

routes.post("/centerregister", async (req, res) => {
    const { centerName, address, mobile, password } = req.body;
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
            const newCenter = new Center({ centerName, address, mobile, password: hashPassword })
            newCenter.save();
            res.status(200).json(newCenter)
        }
    } catch (error) {
        console.log(error);
    }
})

routes.post("/Login",async(req,res)=>{
    const { centerName, password } = req.body;
    try {
        if (!centerName || !password) {
            return res.status(401).json("Empty")
        }
        else{
            const CenterNa = await Center.findOne({ centerName: centerName })
            if(CenterNa){
                const comparePass = await bcrypt.compare(password,CenterNa.password)
                // console.log(comparePass);  
                if(comparePass){
                    res.status(200).json("Successfull");
                }
                else{
                    return res.status(400).json("Wrong Password")
                }
            }
            else{
                return res.status(400).json("User Not Present")
            }
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = routes;