import React from 'react'
import styles from './HomeLeft.module.css'
const HomeLeft = ({selected,updateselected}) => {
  return (
    <div className={styles.container}>
      <div onClick={()=>updateselected("User")} className={selected==="User" ? styles.userselected : styles.user}>User</div>
      <div onClick={()=>updateselected("Expenses")} className={selected==="Expenses" ? styles.expensesselected : styles.expenses}>Expenses</div>
    </div>
  )
}

export default HomeLeft