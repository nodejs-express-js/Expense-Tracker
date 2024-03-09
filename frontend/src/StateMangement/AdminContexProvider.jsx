import React, { createContext, useEffect, useReducer } from 'react'
import useAdminUser from '../Hooks/AdminHooks/useAdminUser'
const adminReducer=(state,action)=>{
    switch(action.type){
    case "ADD_USERS":
      return {...state,users:action.payload}
    case "ADD_EXPENSES":
      return {...state,expenses:action.payload}
    case "DELETE_USERS":
      let temp1=state.users.filter((user)=>{return user._id!==action.payload})  
      let temp2=state.expenses.filter((expense)=>{return expense.userid!==action.payload})   
      return {users:temp1,expenses:temp2}
    case "DELETE_EXPENSES":
      let temp3=state.users;
      let temp4=state.expenses.filter((expense)=>{return expense._id!==action.payload})
      return {users:temp3,expenses:temp4}
    case "CLEAR":
      return {users:null,expenses:null}
    default:
        return state;
    }
}
export const AdminContext=createContext()

const AdminContexProvider = ({children}) => {
    const [state,dispatch]=useReducer(adminReducer,{users:null,expenses:null})
    const {state:adminuserstate}=useAdminUser()
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
    },[adminuserstate])
  return(
    <AdminContext.Provider value={{state,dispatch}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContexProvider