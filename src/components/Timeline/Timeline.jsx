import "./timeline.css";

const educationData = [
    {
        degree: "High School",
        year: "Year of Passing: 2021",
        description:
            "Pursued class 10th from The S.D. Public School, Muzaffarnagar (UP) and secured 97.4%.",
    },
    {
        degree: "Intermediate",
        year: "Year of Passing: 2023",
        description:
            "Pursued class 12th from The S.D. Public School, Muzaffarnagar (UP) and secured 92.4%.",
    },
    {
        degree: "Bachelor of Technology",
        year: "2023 – 2027",
        description:
            "Currently pursuing B.Tech in Computer Science and Engineering at ABES Engineering College, Ghaziabad.",
    },
];

const Timeline = () => {
    return (
        <section className="timeline-box" id="education">
            <p className="section-title">Education</p>

            <div className="timeline-track">
                {educationData.map((item) => (
                    <div className="timeline-entry" key={item.degree}>
                        <div className="timeline-dot" aria-hidden="true"></div>
                        <div className="timeline-card">
                            <h2>{item.degree}</h2>
                            <h3>{item.year}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
