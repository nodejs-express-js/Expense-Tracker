const mongoose=require("mongoose")

const expensesSchema=mongoose.Schema(
    {
        expensetype:{
            type:"String",
            required:true,
        },
        expense:{
            type:"Number",
            required:true,
        },
        date:{
            type:"String",
            requried:true,
        },
        userid:{
            type:"String",
            required:true,
        }
    }
    ,{ timestamps: true }
)

module.exports=mongoose.model("expensesModel",expensesSchema)