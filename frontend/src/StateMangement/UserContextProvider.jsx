import React, { createContext, useEffect, useReducer } from 'react'

const userReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return {user:null}
        default:
            return state;
    }
}
export const userContext=createContext();

const UserContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(userReducer,{user:null})
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        dispatch({type:"LOGIN",payload:user})
    },[])
  return (
    <userContext.Provider value={{state,dispatch}}>
        {children}
    </userContext.Provider>
  )
}

export default UserContextProvider