
import { useContext } from 'react'
import {AdminUserContext} from '../../StateMangement/AdminUserContextProvider'
const useAdminUser = () => {
  
  const context=useContext(AdminUserContext)
  
  if(!context){
    throw Error("please use the context provider inside AdminUserContext")

  }
  return context
}

export default useAdminUser