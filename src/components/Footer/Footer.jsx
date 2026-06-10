import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <h2>Swasti Jain</h2>
                </div>

                <nav aria-label="Footer navigation">
                    <ul className="footer__links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#extra">ExtraCurricular</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="footer__social">
                    <ul className="social__icons">
                        <li>
                            <a href="https://github.com/JainSwasti31" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/swastijain3112" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/jain_swastii.31?igsh=MTl4cW1na2p4cTA0dQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="footer__copyright">
                © {new Date().getFullYear()} Swasti Jain · All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
