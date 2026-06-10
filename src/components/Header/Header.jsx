import { useState } from "react";
import logo from "../../assets/Logo.jpeg";
import './header.css';

const navLinks = [
    { href: "#home",      label: "Home" },
    { href: "#about",     label: "About" },
    { href: "#education", label: "Education" },
    { href: "#extra",     label: "Extra" },
    { href: "#projects",  label: "Projects" },
    { href: "#faq",       label: "FAQ" },
    { href: "#contact",   label: "Contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header>
            <div className="page-header">
                <div className="logo">
                    <img src={logo} alt="Swasti Jain logo" />
                </div>

                {/* Desktop nav */}
                <nav className="desktop-nav" aria-label="Primary navigation">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hamburger */}
                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    role="button"
                >
                    <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>

            {/* Mobile dropdown */}
            <nav className={`dropdown-menu ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
