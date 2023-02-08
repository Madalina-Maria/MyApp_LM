import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import HomePF from './pages/homeLogat/HomePF'
import HomePJ from './pages/homeLogat/HomePJ'
import Login from './pages/login/Login'
import LoginPF from './pages/login/LoginPF'
import LoginPJ from './pages/login/LoginPJ'
import Register from './pages/register/Register'
import RegisterPF from './pages/register/RegisterPF'
import RegisterPJ from './pages/register/RegisterPJ'
import Ajutor from './pages/ajutor/Ajutor'
import Terenuri from './pages/persoanaFizica/Terenuri'
import Licitatii from './pages/persoanaFizica/Licitatii'
import Oferte from './pages/persoanaFizica/Oferte'
import Cereri from './pages/persoanaFizica/Cereri'
import Achizitii from './pages/persoanaFizica/Achizitii'
import AjutorPF from './pages/persoanaFizica/AjutorPF'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/homePf' element={<HomePF />}></Route>
      <Route path='/homePj' element={<HomePJ />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/loginPf' element={<LoginPF />}></Route>
      <Route path='/loginPj' element={<LoginPJ />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/registerPf' element={<RegisterPF />}></Route>
      <Route path='/registerPj' element={<RegisterPJ />}></Route>
      <Route path='/terenuriPf' element={<Terenuri />}></Route>
      <Route path='/licitatiiPf' element={<Licitatii />}></Route>
      <Route path='/ofertePf' element={<Oferte />}></Route>
      <Route path='/cereriPf' element={<Cereri />}></Route>
      <Route path='/achizitiiPf' element={<Achizitii />}></Route>
      <Route path='/ajutorPf' element={<AjutorPF />}></Route>
      <Route path='/ajutor' element={<Ajutor />}></Route>
    </Routes>
  )
}

export default App
