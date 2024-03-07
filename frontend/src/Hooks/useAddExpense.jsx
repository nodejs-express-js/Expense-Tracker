import React, { useState } from 'react'
import useExpenses from './useExpenses'
import useUser from './useUser'

const useAddExpense = () => {
    const [error,setError]=useState(null)
    const [isloading,setIsLoading]=useState(false)
    const {dispatch}=useExpenses()
    const {state}=useUser()
    const addexpense=async(expense,expenseType,datetime)=>{
        if(state.user){
        setError(null)
        setIsLoading(true)
        const response=await fetch("/expenses",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${state.user.token}`
            },
            body:JSON.stringify({
                expense:expense,
                expensetype:expenseType,
                date:datetime,
            })
        })
        const task=await response.json();
        
        if(response.ok){
            dispatch({type:"ADD_EXPENSE",payload:task})
        }
        else{
            if(task.msg){
                setError(task.msg)
            }
            else{
                setError("Server is not working or wrong input")
            }
            
        }
        setIsLoading(false)
    }
    }

  return {error,isloading,addexpense}
}

export default useAddExpense