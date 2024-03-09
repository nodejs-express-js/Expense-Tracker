import {useState} from 'react'
import useAdmin from './useAdmin'
import useAdminUser from './useAdminUser'
const useDeleteExpenses = () => {
    const [error,setError]=useState(null)
    const [isloading,setIsLoading]=useState(false)
    const {dispatch}=useAdmin()
    const {state}=useAdminUser()
    const deleteexpense=async(id)=>{
        if(state.adminuser){
            setError(null)
            setIsLoading(true)
               const response=await fetch("/admin/expenses/"+id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "authorization":`Bearer ${state.adminuser.token}`
                }
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
    }
    return {error,isloading,deleteexpense}
}

export default useDeleteExpenses