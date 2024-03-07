
const express=require("express")
const {userSignUpController,userLoginController}=require("../Controller/UserController")
const userRouter=express.Router()


userRouter.post("/signup",userSignUpController)

userRouter.post("/login",userLoginController)
module.exports=userRouter