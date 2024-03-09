const adminModel=require("../Model/AdminModel")
const jwt=require("jsonwebtoken")
const createToken=(_id)=>{
   const token=jwt.sign({_id:_id},process.env.JWTKEY,{expiresIn:"3d"})
   return token
}
const signupAdminUserController=async({email,password})=>{
try{
const user=await adminModel.signup({email,password})
console.log("super user create with email",email)
}
catch(error){
    console.log(error.message)
}
}

const loginAdminUserController=async(req,res)=>{
    try{
    const user=await adminModel.login(req.body)
    const token=createToken(user._id)
    res.status(200).json({email:req.body.email,token});
    }
    catch(error){
    res.status(400).json({msg:error.message})
    }
}

module.exports={loginAdminUserController,signupAdminUserController}