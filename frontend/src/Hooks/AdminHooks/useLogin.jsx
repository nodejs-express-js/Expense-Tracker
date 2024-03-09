import React, { useState } from 'react'
import useAdminUser from './useAdminUser'

const useLogin = () => {
  const {dispatch} =useAdminUser()
  const [error,setError]=useState("");
  const [isloading,setIsLoading]=useState("");


    const login=async(email,password)=>{
        setError(null)
        setIsLoading(true)
        const response=await fetch("/adminuser/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        const user=await response.json();
        if(response.ok){
           
            dispatch({type:"LOGIN",payload:user})
            localStorage.setItem("adminuser",JSON.stringify(user));
        }
        else{
            setError(user.msg)
        }
        setIsLoading(false)
    }

    
  return {error,isloading,login}
}

export default useLogin