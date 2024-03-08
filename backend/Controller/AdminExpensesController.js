const expensesUserModel=require("../Model/userModel")
const expensesModel=require("../Model/ExpensesModel")


const getAdminUsers=async(req,res)=>{
    try{
        const users=await expensesUserModel.find({})
        res.status(200).json(users)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
   
}

const postAdminUsers=async(req,res)=>{
    try{
        const user=await expensesUserModel.signup(req.body)
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const deleteAdminUsers=async(req,res)=>{
    try{
        const expenses=await expensesModel.deleteMany({userid:req.params.id})
        const deleted=await expensesUserModel.deleteOne({_id:req.params.id})
        console.log(req.params.id)
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const getAdminExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.find({})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const postAdminExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.create({...req.body})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

const deleteAdminExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.deleteOne({_id:req.params.id})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

module.exports={getAdminUsers,postAdminUsers,deleteAdminUsers,getAdminExpenses,postAdminExpenses,deleteAdminExpenses}