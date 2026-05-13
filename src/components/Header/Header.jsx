import { useState } from "react";
import logo from "../../assets/Logo.jpeg"
import'./header.css';

const Header=()=>{
    const [menuOpen, setMenuOpen]=useState(false)

    const handleMenuToggle=()=>{
        setMenuOpen(prevState=>!prevState)
    }
    
    const handleLinkClick=()=>{
        setMenuOpen(false);
    }
      

    return (
        <header className="container">
            <div className="page-header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu-icon" onClick={handleMenuToggle}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <nav className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
                    <li><a href="#extra" onClick={handleLinkClick}>ExtraCurricular</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header