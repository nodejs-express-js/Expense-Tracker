import React, { useContext } from 'react'
import {ExpensesContext} from '../StateMangement/ExpensesContextProvider'
const useExpenses = () => {
    const context=useContext(ExpensesContext);
    if(!context){
        throw Error("use useExpenses hook inside the ExpensesContext")
    }
    return context;
}

export default useExpenses