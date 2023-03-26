const express = require("express");
const center = require("../Schema/center");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Hello from Routes")
})

routes.post("/senterregister", async (req, res) => {
    console.log(req.body);
    const { centerName, address, mobile, password } = req.body;
    try {
        const alreadyCenter = await center.findOne({ centerName: centerName })
        if (alreadyCenter) {
            return res.status(400).json({ error: "Center Already Exist" })
        }
        else {
            const newCenter = new center({ centerName, addressmobile, password })
            newCenter.save();
            res.status(200).json(newCenter)
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = routes;