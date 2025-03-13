import React from 'react';
import './Contact.scss'


const Contact = () => {
    return (
        <section id="contact">
            <div className="section-content contact">
                <h1 className="section-header">Interested in connecting?</h1>
                <div className='contact-wrapper'>
                    <div className='contact-links'>
                        <a className='contact-link email' href="mailto:tannerdaltonjohnson@gmail.com" target="_blank" rel="noopener noreferrer">tannerdaltonjohnson@gmail.com</a>
                        <a className='contact-link phone' href="tel:14783081450">478-308-1450</a>
                    </div>
                    <div className='contact-apps'>
                        <a className='contact-app github' href="https://github.com/tanner-j" target="_blank" rel="noreferrer"></a>
                        <a className='contact-app linkedin' href="https://www.linkedin.com/in/tannerjohnsondev/" target="_blank" rel="noreferrer"></a>
                    </div>
                </div>
                <div className='contact-footer'>
                    <span>&copy; 2025 Tanner Johnson</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;