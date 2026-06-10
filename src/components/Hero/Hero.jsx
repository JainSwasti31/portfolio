import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import myImage from "../../assets/Swasti.jpeg";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-inner">
                <div className="hero-photo-wrapper">
                    <img src={myImage} alt="Swasti Jain" />
                </div>

                <div className="hero-text">
                    <h1>Swasti Jain</h1>
                    <p className="role">MERN Stack Developer</p>
                    <div className="hero-divider"></div>

                    <div className="social" style={{ marginTop: '1.5rem' }}>
                        <a href="https://github.com/JainSwasti31" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/swasti31jain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com/jain_swastii.31?igsh=MTl4cW1na2p4cTA0dQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://wa.me/qr/HXHGMMLGWVTVI1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
