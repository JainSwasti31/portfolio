import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./technical.css";

const Technical = () => {
    return (
        <div className="technical">
            <p className="technical-title">Technical Knowledge</p>
            <div className="technical-content">
                <div className="technical-box">
                    <h3>Web Development</h3>
                    <div className="technical-items">
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>JavaScript</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>CSS</p>
                                <span>Experienced</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>ReactJs</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>NodeJs</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="technical-box">
                    <h3>Software Development</h3>
                    <div className="technical-items">
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>Java</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>C/C++</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>Git/Github</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                        <div className="technical-item">
                            <FontAwesomeIcon icon={faCode} className="technical-icon" />
                            <div className="technical-text">
                                <p>Core Subjects</p>
                                <span>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technical;