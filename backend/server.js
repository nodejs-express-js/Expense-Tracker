const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()


const app=express()
const expensesRouter=require("./Router/ExpensesRouter")
const userRouter=require("./Router/UserRouter")
const adminExpensesRouter=require("./Router/AdminExpensesRouter")
const {adminUserRouter,runforsuperusercheck}=require("./Router/AdminUserRouter")
const protectExpenses=require("./Middleware/ProtectingExpenses")
const protectAdminRoutes=require("./Middleware/ProtectingAdminRoutes")


app.use(cors())
app.use(express.json())

runforsuperusercheck() //create super user by running npm run dev superuser email password
app.use("/adminuser",adminUserRouter)
app.use("/user",userRouter)

app.use("/admin",protectAdminRoutes)
app.use("/admin",adminExpensesRouter)


app.use("/expenses",protectExpenses)
app.use("/expenses",expensesRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("server is listening on ",process.env.PORT)
        })
    }
)
