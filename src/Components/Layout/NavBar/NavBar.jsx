import React, { useState } from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className='logo'>
        <span>LB</span>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
        </li>
        <li>
        <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
        </li>
        <li>
        <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Tecnologias</NavLink>
        </li>
        <li>
        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;