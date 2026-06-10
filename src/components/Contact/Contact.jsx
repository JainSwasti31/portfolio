import emailjs from '@emailjs/browser';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import "./contact.css";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // null | 'success' | 'error'
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        )
        .then(() => {
            setStatus('success');
            setIsSending(false);
            form.current.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            setStatus('error');
            setIsSending(false);
        });
    };

    return (
        <section className="contact-section" id="contact">
            <p className="section-title">Contact Me</p>

            <div className="contact-container">
                {/* Form */}
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your name..."
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your email..."
                            required
                        />
                        <textarea
                            name="message"
                            rows="7"
                            placeholder="Your message..."
                            required
                        />
                        <input
                            type="submit"
                            value={isSending ? 'Sending...' : 'Send Message'}
                            disabled={isSending}
                        />
                    </form>

                    {status === 'error' && (
                        <p className="form-error">
                            Something went wrong. Please try again or email directly.
                        </p>
                    )}
                </div>

                {/* Info */}
                <div className="contact-info-column">
                    <div className="contact-email">
                        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                        <span className="email-title">Email</span>
                        <span className="email-address">swasti31jain@gmail.com</span>
                        <span className="email-link">
                            <a href="mailto:swasti31jain@gmail.com">Send a message</a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Success popup */}
            {status === 'success' && (
                <div className="popup">
                    <p>✓ Message sent successfully!</p>
                    <button onClick={() => setStatus(null)}>Close</button>
                </div>
            )}
        </section>
    );
};

export default Contact;
