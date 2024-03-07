import React from 'react'

import styles from './Navbar.module.css'
import useUser from '../Hooks/useUser'
import {useNavigate} from 'react-router-dom'
import useLogout from '../Hooks/useLogout'
const Navbar = () => {
  const navigate=useNavigate()
  const {state}=useUser()
  const logout=useLogout();
  const logouthandler=()=>{
    logout()
  }
  return (
    <div className={styles.container}>
      <div onClick={()=>{navigate("/")}} style={{cursor:"pointer"}}>Expenses Tracker</div>
      { state.user ?
      <div style={{display:"flex"}}>
        <div>{state.user.email}</div>
        <div style={{cursor:"pointer",padding:"0rem 1rem 0rem 1rem"}} onClick={logouthandler}>Logout</div>
      </div> 
      :
      <div style={{display:"flex"}}>
        <div onClick={()=>{navigate("/login")}} style={{cursor:"pointer",padding:"0rem 1rem 0rem 1rem"}}>Login</div>
        <div onClick={()=>{navigate("/signup")}} style={{cursor:"pointer",padding:"0rem 1rem 0rem 1rem"}}>Signup</div>
      </div>
      }
    </div>
  )
}

export default Navbar