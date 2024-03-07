import React from 'react'
import useExpenses from '../../Hooks/useExpenses'
import EachExpense from './EachExpense'

const HomeLeft = () => {
  const {state}=useExpenses()
  
  return (
    <div style={{width:"75%"}}>
      {state.map((expense,key)=>{
        return (<EachExpense expense={expense} key={key}></EachExpense>)
      })}
    </div>
  )
}

export default HomeLeft