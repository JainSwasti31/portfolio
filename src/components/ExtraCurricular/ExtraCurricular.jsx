import Kalakrit from "../../assets/KalakritMusicSocietyLogo.jpeg";
import "./extra.css";

const activities = [
    {
        img: Kalakrit,
        alt: "Kalakrit Music Society Logo",
        position: "Member",
        title: "Kalakrit — The Cultural Club of ABES (Music Society)",
        link: "https://www.instagram.com/p/DDm0DXmzCBK/?igsh=ZzRvanNsZ3Q2eWJ2",
    },
    {
        img: null,
        alt: "Placement Preparation Crew",
        position: "Crew Member",
        title: "Placement Preparation Crew — ABES Engineering College",
        link: null,
    },
];

const Extra = () => {
    return (
        <section className="extra-contain" id="extra">
            <p className="section-title">ExtraCurricular</p>
            <div className="extra-container">
                {activities.map((activity) => (
                    <div className="extra-card" key={activity.title}>
                        {activity.img ? (
                            <img src={activity.img} alt={activity.alt} />
                        ) : (
                            <div className="extra-card-placeholder" aria-label={activity.alt}>
                                <span>PPC</span>
                            </div>
                        )}
                        <p className="extra-card-position">{activity.position}</p>
                        <p className="extra-card-title">{activity.title}</p>
                        {activity.link && (
                            <div className="extra-more-info">
                                <a
                                    href={activity.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    More Info
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Extra;
