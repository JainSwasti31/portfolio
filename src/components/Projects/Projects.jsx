import civicconnectimage from "../../assets/civicConnect.png";
import studysphereimage from "../../assets/StudySphere.png";
import devmindimage from "../../assets/DevMind_AI.png";
import './projects.css';

const projects = [
    {
        img: civicconnectimage,
        alt: "CivicConnect project screenshot",
        title: "CivicConnect",
        url: "https://civic-connect-amber-two.vercel.app",
    },
    {
        img: studysphereimage,
        alt: "StudySphere project screenshot",
        title: "StudySphere",
        url: "https://study-sphere-nine-zeta.vercel.app",
    },
    {
        img: devmindimage,
        alt: "DevMind AI project screenshot",
        title: "DevMind AI",
        url: "https://dev-mind-ai-sandy.vercel.app",
    },
];

const Project = () => {
    return (
        <section className="projects-container" id="projects">
            <p className="section-title">Projects</p>

            <div className="project-category">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img src={project.img} alt={project.alt} />
                        <div className="project-card-body">
                            <h2>{project.title}</h2>
                            <div className="project-more-info">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
