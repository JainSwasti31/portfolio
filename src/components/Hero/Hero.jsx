import {faGithub, faInstagram, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import myImage from "../../assets/Swasti.jpeg";
import "./hero.css"

const Hero=()=>{
    return (
        <div>
            <div className='hero-container'>
                <div className='images'>
                    <img src={myImage} alt="Swasti Jain" className='img-w' />
                </div>
                <div className='info'>
                    <h1>Swasti Jain</h1>
                    <p>MERN Developer</p>
                </div>
                <div className='social'>
                    <a href="https://github.com/JainSwasti31">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/swasti31jain">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                    <a href="https://www.instagram.com/jain_swastii.31?igsh=MTl4cW1na2p4cTA0dQ==">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://wa.me/qr/HXHGMMLGWVTVI1">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;