import React from 'react'
import styles from './AdminNavbar.module.css'
import useAdminUser from '../Hooks/AdminHooks/useAdminUser'
import useLogout from '../Hooks/AdminHooks/useLogout'
const AdminNavbar = () => {
  const {state}=useAdminUser()
  const logout=useLogout()
  const logouthandler=()=>{
    logout()
  }
  return (
    <div className={styles.container}>
      <div>Admin</div>
      {
      state.adminuser ?    
      <div style={{display:"flex"}}>
        <div style={{padding:"0rem 1rem 0rem 1rem"}}>{state.adminuser.email}</div>
        <div onClick={logouthandler} style={{cursor:"pointer"}}>Logout</div>
      </div> 
      :
      <div>
     
      </div>
      }
    </div>
  )
}

export default AdminNavbar