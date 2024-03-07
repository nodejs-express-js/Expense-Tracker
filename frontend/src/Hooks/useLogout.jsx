import React from 'react'
import useUser from './useUser'
import useExpenses from './useExpenses'
const useLogout = () => {
  const {dispatch}=useUser();
  const {dispatch:expensesDispatch}=useExpenses()
  const logout=()=>{
   dispatch({type:"LOGOUT"});
   localStorage.removeItem("user");
   expensesDispatch({type:"CLEAR_EXPENSES"});
  }
  return logout;
}

export default useLogout