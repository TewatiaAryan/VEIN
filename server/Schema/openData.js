const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const openData = new mongoose.Schema({
    Open_Id : ObjectId,
    centerName: String,
    address: String,
    number: Number,
    a_Plus: Number,
    a_Minus: Number,
    b_Plus: Number,
    b_Minus: Number,
    ab_Plus: Number,
    ab_Minus: Number,
    o_Plus: Number,
    o_Minus: Number
})

const OpenData=mongoose.model("OpenBlood",openData);  //BloodCenter is collection name

module.exports=OpenData;