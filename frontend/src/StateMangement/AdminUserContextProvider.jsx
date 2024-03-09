

import React, { createContext, useReducer,useEffect } from 'react'

const adminreducer=(state,action)=>{
switch(action.type){
    case "LOGIN":
        return {adminuser:action.payload}
    case "LOGOUT":
        return {adminuser:null}
    default:
        return state;

}
}
export const AdminUserContext=createContext()

const AdminUserContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(adminreducer,{adminuser:null})
    useEffect(()=>{
      const user=JSON.parse(localStorage.getItem("adminuser"))
      dispatch({type:"LOGIN",payload:user})
  },[])
  return(
    <AdminUserContext.Provider value={{state,dispatch}}>
        {children}
    </AdminUserContext.Provider>
  )
    
}

export default AdminUserContextProvider