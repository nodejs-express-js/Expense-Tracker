import React, { createContext, useEffect, useReducer } from 'react'

const adminReducer=(state,action)=>{
    switch(action.type){
    case "ADD_USERS":
      return {...state,users:action.payload}
    case "ADD_EXPENSES":
      return {...state,expenses:action.payload}
    default:
        return state;
    }
}
export const AdminContext=createContext()

const AdminContexProvider = ({children}) => {
    const [state,dispatch]=useReducer(adminReducer,{users:null,expenses:null})
    useEffect(()=>{
      const fetchUsersAndExpenses=async()=>{
        const userresponse=await fetch("/admin/user/");
        const users=await userresponse.json();
        if(userresponse.ok){
          dispatch({type:"ADD_USERS",payload:users})
        }
        const expensesresponse=await fetch("/admin/expenses/");
        const expenses=await expensesresponse.json();
        if(expensesresponse.ok){
          dispatch({type:"ADD_EXPENSES",payload:expenses})
        }
      }
      fetchUsersAndExpenses()
    },[])
  return(
    <AdminContext.Provider value={{state,dispatch}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContexProvider