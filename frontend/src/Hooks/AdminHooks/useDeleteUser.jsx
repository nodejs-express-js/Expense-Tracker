import React, { useState } from 'react'
import useAdmin from './useAdmin'

const useDeleteUser = () => {
  const [error,setError]=useState(null)
  const [isloading,setIsLoading]=useState(false)
  const {dispatch}=useAdmin()
  const deleteuser=async(id)=>{
    setError(null)
    setIsLoading(true)
    const response=await fetch(`/admin/user/${id}`,{
        method:"DELETE"
    })
    const deleted=await response.json()
    if(response.ok){
        dispatch({type:"DELETE_USERS",payload:id})
    }
    else{
        setError(deleted.msg)
    }
    setIsLoading(false)
  }

  return {error,isloading,deleteuser}
}

export default useDeleteUser