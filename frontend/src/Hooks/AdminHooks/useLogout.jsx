import React from 'react'

import useAdmin from './useAdmin'
import useAdminUser from './useAdminUser';
const useLogout = () => {
  const {dispatch}=useAdminUser();
  const {dispatch:adminContextDispatch}=useAdmin()
  const logout=()=>{
   dispatch({type:"LOGOUT"});
   localStorage.removeItem("adminuser");
   adminContextDispatch({type:"CLEAR"});
  }
  return logout;
}

export default useLogout