import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Home } from "./components/main/Home";
import { AboutTheShelter } from "./components/main/AboutTheShelter";
import { OurPets } from "./components/main/OurPets";
import { HelpTheShelter } from "./components/main/HelpTheShelter";
import { Contacts } from "./components/main/Contact";

function App() {
  return (
    <header className="header"> 
      <Router>
        <nav className="header__menu">
          <Link to='/home' className="header__link">
          <div>
            <p className="logo__title">Cozy House</p>
            <p className="logo__subtitle">Shelter for pets in Boston</p>
          </div>
          </Link>
          <Link to='/about' className="header__link">About the Shelter</Link>
          <Link to='/pets' className="header__link">Our pets</Link>
          <Link to='/help' className="header__link">Help the Shelter</Link>
          <Link to='/contact' className="header__link">Contacts</Link>
        </nav>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutTheShelter />} />
          <Route path='/pets' element={<OurPets />} />
          <Route path='/help' element={<HelpTheShelter />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
      </Router>
    </header>
  );
}

export default App;
