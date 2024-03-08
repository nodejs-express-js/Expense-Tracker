// EachExpense.js
import React from 'react';
import styles from './EachExpense.module.css';

const EachExpense = ({ expense }) => {
  return (
    <div className={styles.expenseContainer}>
      <div className={styles.expenseItem}>Expense: {expense.expense}</div>
      <div className={styles.expenseItem}>
        Expense Type: <span className={styles.expenseType}>{expense.expensetype}</span>
      </div>
      <div className={styles.expenseItem}>Date: <span className={styles.date}>{expense.date}</span></div>
    </div>
  );
};

export default EachExpense;
