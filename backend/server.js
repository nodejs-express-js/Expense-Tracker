const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const app=express()

const expensesRouter=require("./Router/ExpensesRouter")


app.use(express.json())

app.use("/expenses",expensesRouter)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("server is listening on ",process.env.PORT)
        })
    }
)
