import React, { useState } from 'react';
import Navbar from '../Navbar';
import useSignUp from '../../Hooks/useSignUp';
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignUp();

  const signupHandler = () => {
    signup(email, password);
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
            onClick={signupHandler}
            disabled={isLoading}
          >
            Sign up
          </button>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
