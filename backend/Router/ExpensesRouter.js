const express=require("express")
const expensesRouter=express.Router()
const {getExpenses,postExpenses,deleteExpenses,patchExpenses}=require("../Controller/ExpensesController")

//get
expensesRouter.get("/",getExpenses)


//post
expensesRouter.post("/",postExpenses)


//delete
expensesRouter.delete("/:id",deleteExpenses)


//patch
expensesRouter.patch("/:id",patchExpenses)

module.exports=expensesRouter