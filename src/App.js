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
import { useState } from "react";

function App() {
  
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Router>
        <nav className="header__content container">
          <Link to='/' className="header__link">
          <div>
            <p className="logo__title">Cozy House</p>
            <p className="logo__subtitle">Shelter for pets in Boston</p>
          </div>
          </Link>
          <div className={ showMenu ? "header__menu show" : "header__menu"}>
            <Link to='/about' className="header__link">About the Shelter</Link>
            <Link to='/pets' className="header__link">Our pets</Link>
            <Link to='/help' className="header__link">Help the Shelter</Link>
            <Link to='/contact' className="header__link">Contacts</Link>
          </div>

          <div className="header__hamb" onClick={() => setShowMenu(!showMenu)}>
            <div className="header__hamb-field">
              <span className={ showMenu ? "header__bar active" : "header__bar" }></span>
              <span className={ showMenu ? "header__bar active " : "header__bar" }></span>
              <span className={ showMenu ? "header__bar active" : "header__bar" }></span>
            </div>
          </div>

          
        </nav>
        <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutTheShelter />} />
          <Route path='/pets' element={<OurPets />} />
          <Route path='/help' element={<HelpTheShelter />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
        </div>
      </Router>
      </div>
  );
}

export default App;
