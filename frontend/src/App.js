import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/1_homePrincipal/1.home/Home'
import Login from './pages/1_homePrincipal/2.login/Login'
import LoginPF from './pages/1_homePrincipal/2.login/LoginPF'
import LoginPJ from './pages/1_homePrincipal/2.login/LoginPJ'
import Register from './pages/1_homePrincipal/3.register/Register'
import RegisterPF from './pages/1_homePrincipal/3.register/RegisterPF'
import RegisterPJ from './pages/1_homePrincipal/3.register/RegisterPJ'
import Ajutor from './pages/1_homePrincipal/4.ajutor/Ajutor'
import LicitatiiHome from './pages/1_homePrincipal/5.licitatii/LicitatiiHome'
import LicitatiiActiveHome from './pages/1_homePrincipal/5.licitatii/LicitatiiActiveHome'
import LicitatiiViitoareHome from './pages/1_homePrincipal/5.licitatii/LicitatiiViitoareHome'
import RezultateLicitatiiHome from './pages/1_homePrincipal/5.licitatii/RezultateLicitatiiHome'
import OferteHome from './pages/1_homePrincipal/6.oferte/OferteHome'
import CereriHome from './pages/1_homePrincipal/7.cereri/CereriHome'

import HomePF from './pages/2_persoanaFizica/1.home/HomePF'
import Terenuri from './pages/2_persoanaFizica/2.terenuri/Terenuri'
import Cereri from './pages/2_persoanaFizica/3.cereri/Cereri'
import Achizitii from './pages/2_persoanaFizica/4.achizitii/Achizitii'
import AjutorPF from './pages/2_persoanaFizica/5.ajutor/AjutorPF'

import HomePJ from './pages/3_persoanaJuridica/1.home/HomePJ'
import AdministrarePJ from './pages/3_persoanaJuridica/2.administrare/1_home/AdministrarePJ'
import FermaPersonalaPJ from './pages/3_persoanaJuridica/2.administrare/2_fermaPersonala/home/FermaPersonalaPJ'
import AnimaleFermaPersonalaPJ from './pages/3_persoanaJuridica/2.administrare/2_fermaPersonala/animale/AnimaleFermaPersonalaPJ'
import MagaziaFermaPersonalaPJ from './pages/3_persoanaJuridica/2.administrare/2_fermaPersonala/magazie/MagaziaFermaPersonalaPJ'
import TerenFermaPersonalaPJ from './pages/3_persoanaJuridica/2.administrare/2_fermaPersonala/teren/TerenFermaPersonalaPJ'
import UtilajeFermaPersonalaPJ from './pages/3_persoanaJuridica/2.administrare/2_fermaPersonala/utilaje/UtilajeFermaPersonalaPJ'
import LucrariPJ from './pages/3_persoanaJuridica/2.administrare/3_lucrari/home/LucrariPJ'
import PersoanePJ from './pages/3_persoanaJuridica/2.administrare/3_lucrari/persoane/PersoanePJ'
import AngajatiPJ from './pages/3_persoanaJuridica/2.administrare/4_angajati/home/AngajatiPJ'
import ContractePJ from './pages/3_persoanaJuridica/2.administrare/4_angajati/contracte/ContractePJ'
import InformatiiAngajatiPJ from './pages/3_persoanaJuridica/2.administrare/4_angajati/informatiiAngajati/InformatiiAngajatiPJ'
import StatisticiPJ from './pages/3_persoanaJuridica/2.administrare/4_angajati/statistici/StatisticiPJ'
import LicitatiileMelePJ from './pages/3_persoanaJuridica/3.licitatii/LicitatiileMelePJ'
import OferteleMelePJ from './pages/3_persoanaJuridica/4.oferte/OferteleMelePJ'
import CererileMelePJ from './pages/3_persoanaJuridica/5.cereri/CererileMelePJ'
import AchizitiiPJ from './pages/3_persoanaJuridica/6.achizitii/AchizitiiPJ'
import AjutorPJ from './pages/3_persoanaJuridica/7.ajutor/AjutorPJ'

import Licitatii from './pages/persoanaFizica/licitatii/Licitatii'
import Oferte from './pages/persoanaFizica/oferte/Oferte'
import Favorite from './pages/persoanaFizica/oferte/Favorite'
import Conversatii from './pages/persoanaFizica/oferte/Conversatii'
import ConversatiiCereriPF from './pages/persoanaFizica/cereri/ConversatiiCereriPF'
import RezultateCereriPF from './pages/persoanaFizica/cereri/RezultateCereriPF'
import LicitatiiInCurs from './pages/persoanaFizica/licitatii/LicitatiiInCurs'
import LicitatiiViitoare from './pages/persoanaFizica/licitatii/LicitatiiViitoare'
import RezultateLicitatii from './pages/persoanaFizica/licitatii/RezultateLicitatii'
import CereriPJ from './pages/persoanaJuridica/cereri/CereriPJ'
import ConversatiiCereriPJ from './pages/persoanaJuridica/cereri/ConversatiiCereriPJ'
import RezultateCereriPJ from './pages/persoanaJuridica/cereri/RezultateCereriPJ'
import LicitatiiPJ from './pages/persoanaJuridica/licitatii/LicitatiiPJ'
import LicitatiiInCursPJ from './pages/persoanaJuridica/licitatii/LicitatiiInCursPJ'
import LicitatiiViitoarePJ from './pages/persoanaJuridica/licitatii/LicitatiiViitoarePj'
import RezultateLicitatiiPJ from './pages/persoanaJuridica/licitatii/RezultateLicitatiiPJ'
import OfertePJ from './pages/persoanaJuridica/oferte/OfertePJ'
import OferteConversatiiPJ from './pages/persoanaJuridica/oferte/OferteConversatiiPJ'
import OferteFavoritePJ from './pages/persoanaJuridica/oferte/OferteFavoritePJ'
import Test from './pages/Test'
import Test2 from './pages/Test2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/loginPf' element={<LoginPF />}></Route>
      <Route path='/loginPj' element={<LoginPJ />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/registerPf' element={<RegisterPF />}></Route>
      <Route path='/registerPj' element={<RegisterPJ />}></Route>
      <Route path='/ajutor' element={<Ajutor />}></Route>
      <Route path='/licitatiihome' element={<LicitatiiHome />}></Route>
      <Route
        path='/licitatiiactivehome'
        element={<LicitatiiActiveHome />}
      ></Route>
      <Route
        path='/licitatiiviitoarehome'
        element={<LicitatiiViitoareHome />}
      ></Route>
      <Route
        path='/rezultatelicitatiihome'
        element={<RezultateLicitatiiHome />}
      ></Route>
      <Route path='/ofertehome' element={<OferteHome />}></Route>
      <Route path='/cererihome' element={<CereriHome />}></Route>

      <Route path='/homePf' element={<HomePF />}></Route>
      <Route path='/terenuriPf' element={<Terenuri />}></Route>
      <Route path='/cereriPf' element={<Cereri />}></Route>
      <Route path='/achizitiiPf' element={<Achizitii />}></Route>
      <Route path='/ajutorPf' element={<AjutorPF />}></Route>

      <Route path='/homePj' element={<HomePJ />}></Route>
      <Route path='/administrarePj' element={<AdministrarePJ />}></Route>
      <Route path='/fermapersonalaPj' element={<FermaPersonalaPJ />}></Route>
      <Route
        path='/terenfermapersonalaPj'
        element={<TerenFermaPersonalaPJ />}
      ></Route>
      <Route
        path='/animalefermapersonalaPj'
        element={<AnimaleFermaPersonalaPJ />}
      ></Route>
      <Route
        path='/utilajefermapersonalaPj'
        element={<UtilajeFermaPersonalaPJ />}
      ></Route>
      <Route
        path='/magaziafermapersonalaPj'
        element={<MagaziaFermaPersonalaPJ />}
      ></Route>
      <Route path='/lucrariPj' element={<LucrariPJ />}></Route>
      <Route path='/persoanePj' element={<PersoanePJ />}></Route>
      <Route path='/angajatiPj' element={<AngajatiPJ />}></Route>
      <Route path='/contractePj' element={<ContractePJ />}></Route>
      <Route
        path='/informatiiangajatiPj'
        element={<InformatiiAngajatiPJ />}
      ></Route>
      <Route path='/statisticiPj' element={<StatisticiPJ />}></Route>
      <Route path='/licitatiilemelePj' element={<LicitatiileMelePJ />}></Route>
      <Route path='/ofertelemelePj' element={<OferteleMelePJ />}></Route>
      <Route path='/cererilemelePj' element={<CererileMelePJ />}></Route>
      <Route path='/achizitiiPj' element={<AchizitiiPJ />}></Route>
      <Route path='/ajutorPj' element={<AjutorPJ />}></Route>

      <Route path='/licitatiiPf' element={<Licitatii />}></Route>
      <Route path='/licitatiiPj' element={<LicitatiiPJ />}></Route>
      <Route path='/licitatiiincursPf' element={<LicitatiiInCurs />}></Route>
      <Route path='/licitatiiincursPj' element={<LicitatiiInCursPJ />}></Route>
      <Route
        path='/licitatiiviitoarePf'
        element={<LicitatiiViitoare />}
      ></Route>
      <Route
        path='/licitatiiviitoarePj'
        element={<LicitatiiViitoarePJ />}
      ></Route>
      <Route
        path='/rezultatelicitatiiPf'
        element={<RezultateLicitatii />}
      ></Route>
      <Route
        path='/rezultatelicitatiiPj'
        element={<RezultateLicitatiiPJ />}
      ></Route>
      <Route path='/ofertePf' element={<Oferte />}></Route>
      <Route path='/favoritePf' element={<Favorite />}></Route>
      <Route path='/conversatiiPf' element={<Conversatii />}></Route>
      <Route path='/ofertePj' element={<OfertePJ />}></Route>
      <Route path='/oferteFavoritePj' element={<OferteFavoritePJ />}></Route>
      <Route
        path='/oferteconversatiiPj'
        element={<OferteConversatiiPJ />}
      ></Route>
      <Route
        path='/conversatiicereriPf'
        element={<ConversatiiCereriPF />}
      ></Route>
      <Route path='/rezultatecereriPf' element={<RezultateCereriPF />}></Route>
      <Route path='/cereriPj' element={<CereriPJ />}></Route>
      <Route
        path='/conversatiicereriPj'
        element={<ConversatiiCereriPJ />}
      ></Route>
      <Route path='/rezultatecereriPj' element={<RezultateCereriPJ />}></Route>
      <Route path='/test' element={<Test />}></Route>
      <Route path='/test2' element={<Test2 />}></Route>
    </Routes>
  )
}

export default App
