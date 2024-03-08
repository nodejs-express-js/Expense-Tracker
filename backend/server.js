const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
require("dotenv").config()


const app=express()
const expensesRouter=require("./Router/ExpensesRouter")
const userRouter=require("./Router/UserRouter")
const adminExpensesRouter=require("./Router/AdminExpensesRouter")
const protectExpenses=require("./Middleware/ProtectingExpenses")

app.use(cors())
app.use(express.json())


app.use("/admin",adminExpensesRouter)
app.use("/user",userRouter)

app.use("/expenses",protectExpenses)
app.use("/expenses",expensesRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("server is listening on ",process.env.PORT)
        })
    }
)
