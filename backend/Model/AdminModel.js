const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")


const adminSchema=mongoose.Schema({
    email:{
        type:"string",
        required:true,
        unique:true,
    },
    password:{
        type:"string",
        required:true,
    }
})



adminSchema.statics.signup=async function({email,password}){
if(!email || !password || email==="" || password===""){
    throw Error("email and password are necessary fields")
}
if(!validator.isEmail(email)){
    throw Error("not a valid email")
}
if(!validator.isStrongPassword(password)){
    throw Error("password with one upper case,one lower case,one number,one special character are necessary")
}
const exists=await this.findOne({email})
if(exists){
    throw Error("email already in use")
}
const salt=await bcrypt.genSalt(10)
const hashpassword=await bcrypt.hash(password,salt)
const user=await this.create({email,password:hashpassword})
return user;
}



adminSchema.statics.login=async function({email,password}){

    if(!email || !password || email==="" || password===""){
        throw Error("email and password are necessary fields")
    }
  
    const user=await this.findOne({email})
    if(user){
        const passwordmatch=await bcrypt.compare(password,user.password)
        if(passwordmatch)
        {
            return user;
        }
        else{
            throw Error("please enter correct password")
        }
    }
   else{
    throw Error("user does not exist")
   }
}

module.exports=mongoose.model("adminModel",adminSchema)