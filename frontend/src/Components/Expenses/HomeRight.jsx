import React, { useState } from 'react';
import styles from './HomeRight.module.css'; // Import the CSS module
import useAddExpense from '../../Hooks/useAddExpense';

const HomeRight = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  
  const [expense, setExpense] = useState(0);
  const [expenseType, setExpenseType] = useState('Food');
  const [datetime, setDateTime] = useState(getCurrentDateTime());
  const  {error,isloading,addexpense}=useAddExpense();
  const addExpenseHandler = () => {
    addexpense(expense,expenseType,datetime)
  };

  return (
    <div className={styles.homeRightContainer}>
      <form>
        <label className={styles.label}>Expense</label>
        <input
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label}>Expense Type</label>
        <select
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          className={styles.select}
        >
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
        <label className={styles.label}>Date</label>
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDateTime(e.target.value)}
          className={styles.input}
        />
        <button type="button" onClick={addExpenseHandler} className={styles.button}>
          Add Expense
        </button>
        {error ? <div>{error}</div> : <></>}
      </form>
    </div>
  );
};

export default HomeRight;
