import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutPhoto from "../../assets/AboutPhoto.jpeg";
import resume from "../../assets/Swasti_Jain_Resume (3).pdf";
import "./about.css";

const About = () => {
    return (
        <div className="about-container" id="about">
            <p className="section-title">About Me</p>
            <div className="about">
                <div className="image-about">
                    <img src={AboutPhoto} alt="Swasti Jain" />
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                </div>
                <div className="about-content">
                    <p>
                        Hi, I'm Swasti Jain hailing from Muzaffarnagar, Uttar Pradesh. Currently a
                        3rd-year Computer Science and Engineering student at ABES Engineering College.
                        I have a strong interest in problem solving and web development and enjoy
                        building projects that solve real-world problems.
                    </p>
                    <p>
                        I am always eager to learn new tools and technologies. I thrive on challenges,
                        enjoy collaborating on innovative projects, and aim to create impactful
                        solutions through technology.
                    </p>
                    <p>Here are a few of the technologies I have been working with recently:</p>
                    <div className="tech">
                        <div className="tech-item">
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                        <div className="tech-item">
                            <ul>
                                <li>Express.js</li>
                                <li>Java</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button">
                        <a href={resume} className="btn-download" download="Swasti_Jain_Resume.pdf">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
