import emailjs from '@emailjs/browser'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useRef, useState} from 'react'
import "./contact.css"

const Contact=()=>{
    const form=useRef();
    const [isSent, setIsSent]=useState(false);

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current,{
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
            ()=>{
                console.log('SUCCESS!');
                setIsSent(true)
                form.current.reset()
            },
            (error)=>{
                console.log('FAILED...',error.text);           
            }
        )
    }

    return (
        <div className='contact-section' id="contact">
            <p className='contact-title'>Contact Me</p>

            <div className='contact-container'>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            id="fname"
                            name="user_name"
                            placeholder='Enter your name...'
                            required
                        />
                        <input 
                            type="email"
                            id='user_email'
                            name='user_email'
                            placeholder='Enter your email id...'
                            required
                        />
                        <textarea name="message" id="subject" required placeholder='Write your message...' style={{height: '200px'}}
                        />
                        <input type="submit" value="Send" />
                    </form>
                </div>

                <div className='contact-info-column'>
                    <div className='contact-email'>
                        <FontAwesomeIcon icon={faEnvelope} className='email-icon'/>
                        <span className='email-title'>Email</span>
                        <span className='email-address'>swasti31jain@gmail.com</span>
                        <span className='email-link'><a href="mailto:swasti31jain@gmail.com">Send a message</a></span>
                    </div>
                </div>
            </div>

            {isSent && (
                <div className='popup'>
                    <p>Message sent successfully!</p>
                    <button onClick={()=>setIsSent(false)}>Close</button>
                </div>
            )}
        </div>
    )
}

export default Contact