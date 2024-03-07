import React, { useContext } from 'react'
import { userContext } from '../StateMangement/UserContextProvider'

const useUser = () => {
    const context=useContext(userContext)
    if(!context){
        throw Error("please use useUser hook inside the userContextProvider")
    }
    return context
}

export default useUser