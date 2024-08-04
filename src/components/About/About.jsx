import React from 'react'
import about from '../../assets/about.jpg'
import './About.scss'

const About = () => {
    return (
        <section id="about" data-scroll data-scroll-speed="0.1">
            <div className="section-content about">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    About Me
                </h1>
                <div className="about-container">
                    <div className="about-image--wrapper">
                        <img src={about} alt="B&W portrait sitting on concrete wall" className="rounded-lg h-full" />
                    </div>
                    <div className="about-info--wrapper">
                        <div className="about-cards--wrapper">
                            <div className="about-card" id="experience-about">
                                <h2>Experience</h2>
                                <p>2+ years</p>
                                <p>Front-End Development & UI Design</p>
                            </div>
                            <div className="about-card" id="education">
                                <h2>Education</h2>
                                <p>B.S. in Software Engineering</p>
                                <p>Kennesaw State University</p>
                            </div>
                        </div>
                        <p className='about-description'>Based in Denver, CO, I'm a front-end developer and UI/UX engineer with a strong background in developing software solutions with delightful user experiences.</p>
                        <br/>
                        <p className='about-description'>Paired with my keen eye for detail and extreme passion for what I do, my experience in consulting and collaboration in problem-solving drives excellence in each project I undertake. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
