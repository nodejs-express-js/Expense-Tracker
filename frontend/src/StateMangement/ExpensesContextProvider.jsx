import React, {  useReducer,createContext, useEffect } from 'react'
import useUser from '../Hooks/useUser'

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
        case "CLEAR_EXPENSES":
            return []
        default:
            return state;
    }
}

export const ExpensesContext=createContext()
const ExpensesContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(expensesReducer,[])
    const {state:userstate}=useUser()
    useEffect(()=>{

        const fetchExpenses=async()=>{
           
            if(userstate.user){
               
                const response=await fetch("/expenses",{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "authorization":`Bearer ${userstate.user.token}`
                    }
                })
                
                const expenses=await response.json()
                
                if(response.ok){
                    dispatch({type:"ADD_EXPENSES",payload:expenses})
                }
            }
        
        }
        fetchExpenses()
    },[userstate])


  return (
    <ExpensesContext.Provider value={{state,dispatch}}>
        {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider