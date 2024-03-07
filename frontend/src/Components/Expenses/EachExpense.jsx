import React from 'react';
import styles from './EachExpense.module.css'; // Import the CSS module
import useDeleteExpense from "../../Hooks/useDeleteExpense";

const EachExpense = ({ expense }) => {
  const {error,isloading,deleteExpense}=useDeleteExpense()
  const deletehandler=()=>{
    deleteExpense(expense._id)
  }
  return (
    <div className={styles.card}> {/* Apply card class */}
    <div className={styles.minicontainer}>
      <div className={styles.date}>{expense.date}</div> {/* Apply date class */}
      <div style={{cursor:"pointer"}} className="material-symbols-outlined" onClick={deletehandler} disabled={isloading}>delete_forever</div>
    </div>
      
      <div className={styles.expense}>{expense.expense}</div> {/* Apply expense class */}
      <div className={styles.expensetype}>{expense.expensetype}</div> {/* Apply expensetype class */}
      {error ? <div>{error}</div> : <></>}
    </div>
  );
};

export default EachExpense;
