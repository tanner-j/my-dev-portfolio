import React, { useEffect, useRef } from 'react'
import about from '../../assets/profile_2.jpg'
import './About.scss'
import { gsap } from 'gsap'

const About = () => {

    const aboutInfoWrapperRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Start the GSAP animation when element is in view
              gsap.fromTo(entry.target, 
                {
                  opacity: 0,
                  y: 50
                }, 
                {
                  opacity: 1,
                  y: 0,
                  duration: 1.5,
                  ease: 'power2.out',
                  stagger: 0.4
                }
              );
              // Once animated, stop observing
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.1 // Trigger animation when 10% of the element is visible
        });
    
        if (aboutInfoWrapperRef.current) {
          const paragraphs = aboutInfoWrapperRef.current.querySelectorAll('p');
          paragraphs.forEach(p => observer.observe(p));
        }
    
        return () => {
          // Cleanup observer on unmount
          if (aboutInfoWrapperRef.current) {
            const paragraphs = aboutInfoWrapperRef.current.querySelectorAll('p');
            paragraphs.forEach(p => observer.unobserve(p));
          }
        };
      }, []);

    return (
        <section id="about">
            <div className="section-content about">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    About Me
                </h1>
                <div className="about-container">
                    <div className="about-image--wrapper">
                        <img src={about} alt="B&W portrait sitting on concrete wall" className="rounded-lg object-cover" />
                    </div>
                    <div className="about-info--wrapper" ref={aboutInfoWrapperRef}>
                        {/* <div className="about-cards--wrapper">
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
                        </div> */}
                        <p className='about-description'>I’ve always had a knack of creating, a passion for design, and a fascination with technology. While pursuing my Bachelor’s degree in Software Engineering, I discovered the world of UI/UX design and its connection to software development — and was instantly hooked. I saw how <b>design</b> and <b>development</b> came together, allowing me to blend my technical skills with my creative side. </p>
                        {/* <div className='about-description--divider'></div> */}
                        <p className='about-description with-divider'>Fast forward to 2024 and I’m creating <b>pixel-perfect</b>, <b>captivating</b>, and <b>accessible</b> digital experiences for clients across education, finance and more. I take pride in my expertise in design systems, accessibility, and usability, ensuring my work exceeds the highest standards. Whether it’s a large-scale initiative or a smaller task, I always bring a deep <b>curiosity</b>, strong <b>work ethic</b>, and sharp <b>attention to detail</b> to everything I do.</p>
                        {/* <div className='about-description--divider'></div> */}
                        <p className='about-description with-divider'>When I’m not at the computer, you can usually find me out on a trail with my dog, playing a round of <b>pickleball</b>, or cooking and hosting a dinner party with friends.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
