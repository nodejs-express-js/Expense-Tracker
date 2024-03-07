const jwt=require("jsonwebtoken")
require("dotenv").config()

const expensesUserModel = require("../Model/userModel");

const protectExpenses=async(req,res,next)=>{
    
    
    
    try{
    const {authorization}=req.headers;
    if(!authorization){
        res.status(400).json({msg:"authorization token is necessary"})
        return;
    }
        const token=authorization.split(" ")[1]
        const {_id}=jwt.verify(token,process.env.JWTKEY)
        const user=await expensesUserModel.findOne({_id})
        req.user=user;
        
        next()
    }
    catch(error){
        res.status(400).json({msg:"not a valid token"})
    }
    
    
    
}
module.exports=protectExpenses