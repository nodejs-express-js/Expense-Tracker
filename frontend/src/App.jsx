import './App.css'
import Home from './Components/Expenses/Home'
import Login from './Components/User/Login'
import {Routes,Route,Navigate} from 'react-router-dom'
import Signup from './Components/User/Signup'
import useUser from './Hooks/useUser'

import AdminHome from './Components/AdminView/AdminHome'
import AdminLogin from './Components/AdminUser/AdminLogin'
import useAdminUser from './Hooks/AdminHooks/useAdminUser'
function App() {
  const {state}=useUser()
  const {state:adminuser}=useAdminUser()
  return (
    <>
    <Routes>
        <Route path='/' element={state.user ? <Home></Home> : <Navigate to="/login"></Navigate>}></Route>
        <Route path='/login' element={!state.user ? <Login></Login> :  <Navigate to="/"></Navigate>}></Route>
        <Route path='/signup' element={!state.user  ? <Signup></Signup>:<Navigate to="/"></Navigate>}></Route>

        <Route path='/admin' element={adminuser.adminuser ? <AdminHome></AdminHome> : <Navigate to="/admin/login"></Navigate>}></Route>
        <Route path='/admin/login' element={!adminuser.adminuser ? <AdminLogin></AdminLogin>:  <Navigate to="/admin"></Navigate>}></Route>
    </Routes>
     
    </>
  )
}

export default App
