import React, {  useReducer,createContext, useEffect } from 'react'

const expensesReducer=(state,action)=>{
    switch(action.type){
        case "ADD_EXPENSES":
            return [...action.payload]
        case "ADD_EXPENSE":
            return [...state,action.payload]
        case "REMOVE_EXPENSE":
            return state.filter((expense)=>{
                return expense._id!==action.payload;
            })
        default:
            return state;
    }
}

export const ExpensesContext=createContext()
const ExpensesContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(expensesReducer,[])
    
    useEffect(()=>{
        const fetchExpenses=async()=>{
        const response=await fetch("/expenses")
        const expenses=await response.json()
        if(response.ok){
            dispatch({type:"ADD_EXPENSES",payload:expenses})
        }
        }
        fetchExpenses()
    },[])


  return (
    <ExpensesContext.Provider value={{state,dispatch}}>
        {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider