const expensesUserModel=require("../Model/userModel")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const createToken=(_id)=>{
   return  jwt.sign({_id:_id},process.env.JWTKEY,{expiresIn:"3d"})
}

const userSignUpController=async(req,res)=>{
    
    try{
        const user=await expensesUserModel.signup(req.body)
        const token=createToken(user._id)
        res.status(200).json({email:req.body.email,token:token})
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}



const userLoginController=async(req,res)=>{
    try{
        const user=await expensesUserModel.login(req.body)
        const token=createToken(user._id)
        res.status(200).json({email:req.body.email,token:token})
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

module.exports={userSignUpController,userLoginController}