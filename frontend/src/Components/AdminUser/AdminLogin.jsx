// AdminLogin.js

import React, { useState } from 'react';
import useLogin from '../../Hooks/AdminHooks/useLogin';
import AdminNavbar from '../AdminNavbar';
import styles from './AdminLogin.module.css'; // Import CSS Module styles

const AdminLogin = () => {
    const { error, isLoading, login } = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const loginHandler = () => {
        login(email, password);
    }

    return (
        <div>
            <AdminNavbar />
            <div className={styles.loginContainer}> {/* Apply CSS Module class */}
                <label className={styles.label}>Email</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} /> {/* Apply CSS Module class */}
                <label className={styles.label}>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className={styles.inputField} /> {/* Apply CSS Module class */}
                <button onClick={loginHandler} disabled={isLoading} className={styles.button}>Login</button> {/* Apply CSS Module class */}
                {error ? <div>{error}</div> : <></>}
            </div>
        </div>
    );
}

export default AdminLogin;
