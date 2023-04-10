const mongoose=require("mongoose");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const centerSchema=new mongoose.Schema({
    Open_Id : ObjectId,
    centerName:String,
    address:String,
    number:Number,
    password:String,
    bloodGroup:{
        a_Plus: Number,
        a_Minus: Number,
        b_Plus:Number,
        b_Minus:Number,
        ab_Plus:Number,
        ab_Minus:Number,
        o_Plus:Number,
        o_Minus:Number
    }
})


centerSchema.methods.generateAuthToken = async function (){
    try {
        const token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Center=mongoose.model("BloodCenter",centerSchema);  //BloodCenter is collection name

module.exports=Center;