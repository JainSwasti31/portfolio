import { useState } from 'react';
import civicconnectimage from "../../assets/civicConnect.png";
import portfolioImage from "../../assets/portfolio.png";
import './projects.css';

const Project = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="projects-container">
            <p className="project-title">Projects</p>

            <div className="projects-display">
                {(selectedCategory === 'all' || selectedCategory === 'individual') && (
                    <div className="project-category">
                        <div className="project-card">
                            <img src={portfolioImage} alt="My Portfolio" />
                            <h2>My Portfolio</h2>
                            <div className="project-more-info">
                                <a href="https://portfolio-rc7t.vercel.app/">View Project</a>
                            </div>
                        </div>
                        <div className="project-card">
                            <img src={civicconnectimage} alt="CivicConnect" />
                            <h2>CivicConnect</h2>
                            <div className="project-more-info">
                                <a href="https://civic-connect-amber-two.vercel.app">View Project</a>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;