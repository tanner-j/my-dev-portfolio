import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="section-content contact">
                <h1 className="section-header">Interested in connecting?</h1>
                <div className={styles.contact_wrapper}>
                    <div className={styles.contact_links}>
                        <a className={`${styles.contact_link} ${styles.email}`} href="mailto:tannerdaltonjohnson@gmail.com" target="_blank" rel="noopener noreferrer">tannerdaltonjohnson@gmail.com</a>
                        <a className={`${styles.contact_link} ${styles.phone}`} href="tel:14783081450">478-308-1450</a>
                    </div>
                    <div className={styles.contact_apps}>
                        <a className={`${styles.contact_app} ${styles.github}`} href="https://github.com/tanner-j" target="_blank" rel="noreferrer"></a>
                        <a className={`${styles.contact_app} ${styles.linkedin}`} href="https://www.linkedin.com/in/tannerjohnsondev/" target="_blank" rel="noreferrer"></a>
                    </div>
                </div>
                <div className={styles.contact_footer}>
                    <span>&copy; 2024 Tanner Johnson</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;