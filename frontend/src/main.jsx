import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpensesContextProvider from './StateMangement/ExpensesContextProvider.jsx'
import UserContextProvider from './StateMangement/UserContextProvider.jsx'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter> {/*for routing */}

        <UserContextProvider>{/*for user context */}
        <ExpensesContextProvider>{/*for expenses context */}
            <App />
        </ExpensesContextProvider>
        </UserContextProvider>

    </BrowserRouter>
    
  </React.StrictMode>,
)
