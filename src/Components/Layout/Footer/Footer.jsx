import React from 'react'
import './Footer.css'
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        
        <div className="footerConatiner">
            <div className="socialIcons">
                <a href="https://www.reddit.com/" target="_blank"><i><FaReddit /></i></a>
                <a href=""><i><FaYoutube /></i></a>
                <a href=""><i><FaLinkedin /></i></a>
                <a href=""><i><FaInstagram /></i></a>
                <a href=""><i><FaGithub /></i></a>
            </div>
            <div className="footerNav">
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footerBottom">
            <p>Copyright &copy;2024; Designed by <span className="designer">Leonardo Beron</span></p>
        </div>
    </footer>
  )
}

export default Footer