import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import LoginPF from './pages/login/LoginPF'
import LoginPJ from './pages/login/LoginPJ'
import Register from './pages/register/Register'
import RegisterPF from './pages/register/RegisterPF'
import RegisterPJ from './pages/register/RegisterPJ'
import Ajutor from './pages/ajutor/Ajutor'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/loginPf' element={<LoginPF />}></Route>
      <Route path='/loginPj' element={<LoginPJ />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/registerPf' element={<RegisterPF />}></Route>
      <Route path='/registerPj' element={<RegisterPJ />}></Route>
      <Route path='/ajutor' element={<Ajutor />}></Route>
    </Routes>
  )
}

export default App
