import React, { useState } from 'react'
import useExpenses from './useExpenses'
import useUser from './useUser'
const useDeleteExpense = () => {
    const [error,setError]=useState(null)
    const [isloading,setIsLoading]=useState(false)
    const {dispatch}=useExpenses()
    const {state}=useUser()
  const deleteExpense=async(_id)=>{
    if(state.user){
    setIsLoading(true)
    setError(null)
    const response=await fetch("/expenses/"+_id,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "authorization":`Bearer ${state.user.token}`
        }
    })
    const task=await response.json();

    if(response.ok){
        dispatch({type:"REMOVE_EXPENSE",payload:_id})
    }
    else{
        setError(task.msg)
    }
    setIsLoading(false)
  }
}
  return {error,isloading,deleteExpense}
}

export default useDeleteExpense