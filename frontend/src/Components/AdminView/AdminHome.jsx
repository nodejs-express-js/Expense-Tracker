import React,{useEffect, useState} from 'react'
import AdminNavbar from '../AdminNavbar'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import styles from './AdminHome.module.css'
HomeRight
const AdminHome = () => {
    const [selected,setSelected]=useState("User")
    const updateselected=(newselect)=>{
        setSelected(newselect)
    }
    
  return (
    <div style={{height:"100vh"}}>
        <AdminNavbar></AdminNavbar>
        <div className={styles.container}>
            <HomeLeft selected={selected} updateselected={updateselected}></HomeLeft>
            <HomeRight selected={selected}></HomeRight>
        </div>
       
    </div>
  )
}

export default AdminHome