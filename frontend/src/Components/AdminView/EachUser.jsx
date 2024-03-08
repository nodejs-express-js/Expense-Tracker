// EachUser.js
import React from 'react';
import styles from './EachUser.module.css';

const EachUser = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.email}>user: {user.email}</div>
      <div className={styles.password}>password: {user.password}</div>
    </div>
  );
};

export default EachUser;
