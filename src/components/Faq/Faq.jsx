import { useState } from "react";
import './faq.css';

const faqs = [
    {
        question: 'How do you describe yourself?',
        answer: 'I am a third-year Computer Science student at ABES Engineering College, known for being curious, adaptable, and dedicated. Along with my academic journey, I enjoy exploring new technologies, solving problems, and building impactful projects. I bring a positive attitude, strong teamwork spirit, and leadership qualities — taking initiative and guiding others while continuing to learn and grow.',
    },
    {
        question: 'What technologies do you work with?',
        answer: 'I mainly work with the MERN stack (MongoDB, Express, React, Node.js) along with HTML, CSS, and JavaScript. I also have an understanding of Cloud Computing fundamentals, which helps me stay aware of how modern applications use cloud-based solutions.',
    },
    {
        question: 'What are your hobbies and interests?',
        answer: 'In my leisure time, I enjoy reading books, singing, and dancing. Reading helps me gain new perspectives and stay focused, while singing and dancing allow me to express creativity, boost confidence, and maintain a positive balance between work and personal life.',
    },
    {
        question: "My question isn't listed here. How can I ask it?",
        answer: 'Please visit the Contact section of this website and send me your question. I will definitely provide an answer.',
    },
];

const FaqItem = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`faq-item ${isActive ? 'active' : ''}`}>
            <div className="faq_header" onClick={() => setIsActive((prev) => !prev)}>
                <h3>{question}</h3>
                <span className="faq-toggle" aria-hidden="true">+</span>
            </div>
            <div className={`answer_content ${isActive ? 'active' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <section className="faq-section" id="faq">
            <p className="section-title">FAQ</p>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default Faq;
