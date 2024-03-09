// EachExpense.js
import React from 'react';
import styles from './EachExpense.module.css';
import useDeleteExpenses from '../../Hooks/AdminHooks/useDeleteExpenses';

const EachExpense = ({ expense,user }) => {
  const {error,isloading,deleteexpense}=useDeleteExpenses();
  const deleteexpensehandler=()=>{
    deleteexpense(expense._id)
  }
  return (
    <div className={styles.expenseContainer}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div className={styles.expenseItem}>Expense: {expense.expense}</div>
        <div onClick={deleteexpensehandler} style={{cursor:"pointer"}} className="material-symbols-outlined">delete_forever</div>    
      </div>
      <div className={styles.expenseItem}>
        Expense Type: <span className={styles.expenseType}>{expense.expensetype}</span>
      </div>
      <div className={styles.expenseItem}>Date: <span className={styles.date}>{expense.date}</span></div>
      <div className={styles.expenseItem}>{user.email}</div>
      <div className={styles.expenseItem}>{user._id}</div>
    </div>
  );
};

export default EachExpense;
