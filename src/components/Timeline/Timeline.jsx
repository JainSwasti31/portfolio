import "./timeline.css";

const Timeline=()=>{
    return (
        <div className="timeline-box">
            <p className="timeline-title">Timeline of Education</p>
            <div className="timeline">
                <div className="timeline-container right">
                    <div className="content">
                        <h2>High School</h2>
                        <h3>Year of Passing: 2021</h3>
                        <p>Pursued class 10th from The S.D. Public School, Muzaffarnagar (UP) and secured 97.4%.</p>
                    </div>
                </div>
                <div className="timeline-container right">
                    <div className="content">
                        <h2>Intermediate</h2>
                        <h3>Year of Passing: 2023</h3>
                        <p>Purssued class 12th from The S.D. Public School, Muzaffarnagar (UP) and secured 92.4%.</p>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <div className="timeline-container right">
                    <div className="content">
                        <h2>Bachelor of Technology</h2>
                        <h3>2023-2027</h3>
                        <p>Currently pursuing Bachelor of Technology degree in Computer Science and Engineering at ABES Engineering College, Ghaziabad.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;