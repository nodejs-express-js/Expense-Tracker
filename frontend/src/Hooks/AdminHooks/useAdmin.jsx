import React,{useContext} from 'react'
import {AdminContext} from '../../StateMangement/AdminContexProvider'
const useAdmin = () => {
 const context=useContext(AdminContext)

    if(!context)
    {
        throw Error("please use admin context inside the adminContext")
    }
 return context
}

export default useAdmin