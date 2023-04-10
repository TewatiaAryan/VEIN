const jwt = require("jsonwebtoken")
const center = require("../Schema/center")

const CenterAuth = async (req,res,next)=>{
    try {
        const token = req.cookies.jwtoken;
        const verify = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await center.findOne({_id:verify})
        if (!rootUser) {
            throw new Error("User Not Found")
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        // req.allDataId = rootUser
        next();
    } catch (error) {
        res.status(401).send("UnAuthorise")
        console.log(error);
    }
}

module.exports = CenterAuth