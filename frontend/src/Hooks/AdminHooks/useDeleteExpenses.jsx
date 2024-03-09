import {useState} from 'react'
import useAdmin from './useAdmin'
const useDeleteExpenses = () => {
    const [error,setError]=useState(null)
    const [isloading,setIsLoading]=useState(false)
    const {dispatch}=useAdmin()
    const deleteexpense=async(id)=>{
        setError(null)
    setIsLoading(true)
       const response=await fetch("/admin/expenses/"+id,{
        method:"DELETE"
       })
       const deleted=await response.json()
    if(response.ok){
        dispatch({type:"DELETE_EXPENSES",payload:id})
    }
    else{
        setError(deleted.msg)
    }
    setIsLoading(false)
        
    }
    return {error,isloading,deleteexpense}
}

export default useDeleteExpenses