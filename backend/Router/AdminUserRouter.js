const express=require("express")

const adminUserRouter=express.Router()
const {loginAdminUserController,signupAdminUserController}=require("../Controller/AdminUserController")

function runforsuperusercheck(){
    
    if (process.argv.length === 5) {
        console.error('Usage: node server.js superuser email  password');
        
        const [, , , email, password] = process.argv;
        signupAdminUserController({email, password})
    }
    
}


  

//login logic
adminUserRouter.post("/login",loginAdminUserController)

module.exports={adminUserRouter,runforsuperusercheck}