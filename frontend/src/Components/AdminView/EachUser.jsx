// EachUser.js
import React from 'react';
import styles from './EachUser.module.css';
import useDeleteUser from '../../Hooks/AdminHooks/useDeleteUser';

const EachUser = ({ user }) => {
  const {error,isloading,deleteuser}=useDeleteUser();
  const deleteuserhandler=()=>{
 
    deleteuser(user._id)
  }
  return (
    <div className={styles.container}>
      
      <div style={{display:"flex",justifyContent:"space-between"}}>
          <div className={styles.email}>user: {user.email}</div><div onClick={deleteuserhandler} style={{cursor:"pointer"}} disabled={isloading} className="material-symbols-outlined">delete_forever</div>       
      </div>
 
      <div className={styles.password}>password: {user.password}</div>
      {error ? <div>{error}</div> : <></>}
    </div>
  );
};

export default EachUser;
