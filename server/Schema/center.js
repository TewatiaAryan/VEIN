const mongoose=require("mongoose");

const centerSchema=new mongoose.Schema({
    centerName:String,
    address:String,
    mobile:Number,
    password:String,
    bloodGroup:[{
        a_Plus: Number,
        a_Minus: Number,
        b_Plus:Number,
        b_Minus:Number,
        ab_Plus:Number,
        ab_Minus:Number,
        o_Plus:Number,
        o_Minus:Number
    }]
})

const Center=mongoose.model("BloodCenter",centerSchema);  //BloodCenter is collection name

module.exports=Center;