import React, { useState } from 'react';
import Navbar from '../Navbar';
import useLogin from '../../Hooks/useLogin';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const loginHandler = () => {
    login(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.formContainer}>
        <form action='#'>
          <label className={styles.label}>Email</label>
          <input
            type='text'
            className={styles.inputField}
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
          />
          <label className={styles.label}>Password</label>
          <input
            type='password'
            className={styles.inputField}
            onChange={(e) => { setPassword(e.target.value) }}
            value={password}
          />
          <button
            className={styles.button}
            onClick={loginHandler}
            disabled={isLoading}
          >
            Login
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
