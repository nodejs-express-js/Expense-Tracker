const jwt=require("jsonwebtoken")
require("dotenv").config()

const adminModel = require("../Model/AdminModel");

const protectAdminRoutes=async(req,res,next)=>{
    
    
    
    try{
    const {authorization}=req.headers;
    if(!authorization){
        res.status(400).json({msg:"authorization token is necessary"})
        return;
    }
        const token=authorization.split(" ")[1]
        const {_id}=jwt.verify(token,process.env.JWTKEY)
        const admin=await adminModel.findOne({_id})
        req.admin=admin;
        
        next()
    }
    catch(error){
        res.status(400).json({msg:"not a valid token"})
    }
    
    
    
}
module.exports=protectAdminRoutes