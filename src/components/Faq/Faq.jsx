import { useState } from "react";
import './faq.css'

const FaqItem=({question, answer})=>{
    const [isActive, setIsActive]=useState(false);

    const handleClick=()=>{
        setIsActive(!isActive)
    }

    return (
        <div className="content_container">
            <div className="faq_header" onClick={handleClick}>
                <h3>{question}</h3>
                <span className={`open ${isActive ? '' : 'active'}`}>+</span>
                <span className={`close ${isActive ? 'active' : ''}`}>-</span>
            </div>
            <div className={`answer_content ${isActive ? 'active' : ''}`}>
                <p dangerouslySetInnerHTML={{__html:answer}}></p>
            </div>
        </div>
    )
}

const Faq=()=>{
    const faqs=[
        {
            question: 'How do you describe yourself?',
            answer: 'I am a third-year Computer Science student at ABES Engineering College, known for being curious, adaptable, and dedicated. Along with my academic journey, I enjoy exploring new technologies, solving problems, and building impactful projects. Personality-wise, I bring a positive attitude, strong teamwork spirit, and leadership qualities, taking initiative and guiding others when needed while continuing to learn and grow.'
        },
        {
            question: 'What technologies do you work with?',
            answer: 'I mainly work with the MERN stack (MongoDB, Express, React, Node.js) along with HTML, CSS, and JavaScript. I also have an understanding of the fundamentals of Cloud Computing, which helps me stay aware of how modern applications use cloud-based solutions.'
        },
        {
            question: 'Wwhat are your hobies and interests?',
            answer: 'In my leisure time, I enjoy reading books, singing, and dancing. Reading helps me gain new perspectives and stay focused, while singing and dancing allow me to express creativity, boost confidence, and maintain a positive balance between work and personal life.'
        },
        {
            question: 'My question isn’t listed here. How can I ask it?',
            answer: 'Please visit the contact section of this website and send me your question. I will definitely provide an answer'
        },
    ]

    return(
        <div>
            <div className="faqs_container">
                <p className="faq-title">Frequently Asked Questions</p>
                <div className="question_container">
                    {faqs.map((faq,index)=>(
                        <FaqItem key={index} question={faq.question} answer={faq.answer}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq