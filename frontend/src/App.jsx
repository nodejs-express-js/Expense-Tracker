import './App.css'
import Home from './Components/Expenses/Home'
import Login from './Components/User/Login'
import {Routes,Route,Navigate} from 'react-router-dom'
import Signup from './Components/User/Signup'
import useUser from './Hooks/useUser'


function App() {
  const {state}=useUser()
  return (
    <>
    <Routes>
        <Route path='/' element={state.user ? <Home></Home> : <Navigate to="/login"></Navigate>}></Route>
        <Route path='/login' element={!state.user ? <Login></Login> :  <Navigate to="/"></Navigate>}></Route>
        <Route path='/signup' element={!state.user  ? <Signup></Signup>:<Navigate to="/"></Navigate>}></Route>
    </Routes>
     
    </>
  )
}

export default App
