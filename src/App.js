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
import Terenuri from './pages/persoanaFizica/terenuri/Terenuri'
import Licitatii from './pages/persoanaFizica/licitatii/Licitatii'
import Oferte from './pages/persoanaFizica/oferte/Oferte'
import Favorite from './pages/persoanaFizica/oferte/Favorite'
import Conversatii from './pages/persoanaFizica/oferte/Conversatii'
import Cereri from './pages/persoanaFizica/cereri/Cereri'
import Achizitii from './pages/persoanaFizica/achizitii/Achizitii'
import AjutorPF from './pages/persoanaFizica/ajutor/AjutorPF'
import LicitatiiInCurs from './pages/persoanaFizica/licitatii/LicitatiiInCurs'
import LicitatiiViitoare from './pages/persoanaFizica/licitatii/LicitatiiViitoare'
import RezultateLicitatii from './pages/persoanaFizica/licitatii/RezultateLicitatii'

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
      <Route path='/licitatiiincursPf' element={<LicitatiiInCurs />}></Route>
      <Route
        path='/licitatiiviitoarePf'
        element={<LicitatiiViitoare />}
      ></Route>
      <Route
        path='/rezultatelicitatiiPf'
        element={<RezultateLicitatii />}
      ></Route>
      <Route path='/ofertePf' element={<Oferte />}></Route>
      <Route path='/favoritePf' element={<Favorite />}></Route>
      <Route path='/conversatiiPf' element={<Conversatii />}></Route>
      <Route path='/cereriPf' element={<Cereri />}></Route>
      <Route path='/achizitiiPf' element={<Achizitii />}></Route>
      <Route path='/ajutorPf' element={<AjutorPF />}></Route>
      <Route path='/ajutor' element={<Ajutor />}></Route>
    </Routes>
  )
}

export default App
