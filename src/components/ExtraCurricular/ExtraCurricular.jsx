import Kalakrit from "../../assets/KalakritMusicSocietyLogo.jpeg"
import "./extra.css"

const Extra=()=>{
    return (
        <div className="extra-contain">
            <p className="extra-title">ExtraCurricular</p>
            <div className="extra-container">
                <div className="extra-card">
                    <img src={Kalakrit} alt="Kalakrit Music Society Logo" />
                    <p className="extra-card-position">Member</p>
                    <p className="extra-card-title">Kalakrit - The Cultural Club of ABES (Music Society)</p>
                    <div className="extra-more-info">
                        <a href="https://www.instagram.com/p/DDm0DXmzCBK/?igsh=ZzRvanNsZ3Q2eWJ2" target="_blank" rel="noopener noreferrer">
                            More info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extra