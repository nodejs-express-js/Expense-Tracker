const expensesModel=require("../Model/ExpensesModel")

const getExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.find({userid:req.user._id})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
 }


const postExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.create({...req.body,userid:req.user._id})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}


const deleteExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.deleteOne({_id:req.params.id,userid:req.user._id})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}


const patchExpenses=async(req,res)=>{
    try{
        const expenses=await expensesModel.replaceOne({_id:req.params.id,userid:req.user._id},{...req.body,userid:req.user._id})
        res.status(200).json(expenses)
    }
    catch(error){
        res.status(400).json({msg:error.message})
    }
}

module.exports={getExpenses,postExpenses,deleteExpenses,patchExpenses}