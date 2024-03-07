const mongoose=require("mongoose")
const validator=require("validator")
const bcrypt=require("bcrypt")
const expensesUserSchema=mongoose.Schema({
    email:{
        type:"String",
        required:true,
        unique:true
    },
    password:{
        type:"String",
        required:true,
        unique:true,
    }
})


expensesUserSchema.statics.signup=async function({email,password}){
    if(!email || !password || email=="" || password==""){
        throw Error("email password are required fields")
    }
    if(!validator.isEmail(email)){
        throw Error("please enter a valid email")
    }
    if(!validator.isStrongPassword(password))
    {
        throw Error("one lower case one upper case one number one special character and min length 8")
    }
    const emailexists=await this.findOne({email})
    if(!emailexists){
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
        const user=await this.create({email,password:hashpassword})
        return user;
    }
    else{
        throw Error("user already exists")
    }

}

expensesUserSchema.statics.login=async function({email,password}){
    if(!email || !password || email=="" || password==""){
        throw Error("email password are required fields")
    }
    if(!validator.isEmail(email)){
        throw Error("please enter a valid email")
    }
    const user=await this.findOne({email})
    if(user){
        const passwordmatches=await bcrypt.compare(password,user.password)
        if(passwordmatches){
            return user;
        }
        else{
            throw Error("please enter the correct password")
        }
    }
    else{
        throw Error("user does not exist")
    }
}

module.exports=mongoose.model("expensesUserModel",expensesUserSchema)