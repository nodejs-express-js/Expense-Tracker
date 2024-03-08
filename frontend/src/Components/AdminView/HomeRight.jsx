import React from 'react'
import styles from './HomeRight.module.css'
import useAdmin from '../../Hooks/AdminHooks/useAdmin'
import EachUser from './EachUser'
import EachExpense from './EachExpense'
const HomeRight = ({selected}) => {
  const {state}=useAdmin()
  const showusers=()=>{
    return (state.users ? state.users.map((user,key)=>{
      return <EachUser user={user} key={key}></EachUser>
    }) : <></>)
  }
  const showExpenses=()=>{
    console.log(state.expenses)
    return (state.expenses ? state.expenses.map((expense,key)=>{
      return <EachExpense expense={expense} key={key}></EachExpense> 
    }): <></>)
  }
  return (
    <div style={{width:"75%"}}>
      
      {selected=="User" ? showusers(): <></>}
      {selected=="Expenses" ? showExpenses(): <></>}
    </div>
  )
}

export default HomeRight