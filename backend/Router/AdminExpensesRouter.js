const express=require("express")
const {getAdminUsers,postAdminUsers,deleteAdminUsers,getAdminExpenses,postAdminExpenses,deleteAdminExpenses}=require("../Controller/AdminExpensesController")
const adminExpensesRouter=express.Router()


adminExpensesRouter.get("/user",getAdminUsers)
adminExpensesRouter.post("/user",postAdminUsers)
adminExpensesRouter.delete("/user/:id",deleteAdminUsers)

adminExpensesRouter.get("/expenses",getAdminExpenses)
adminExpensesRouter.post("/expenses",postAdminExpenses)
adminExpensesRouter.delete("/expenses/:id",deleteAdminExpenses)
module.exports=adminExpensesRouter