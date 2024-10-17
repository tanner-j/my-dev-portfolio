import React, { useEffect, useRef } from 'react'
import './Experience.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Experience = () => {

    const experienceRef = useRef();

    useGSAP(() => {
        let line = document.querySelector(".experience-line--container .experience-line");

        gsap.to(line, {
            scrollTrigger: {
                trigger: ".experience-container",
                start: "top top",
                scrub: 1
            },
            x: -200
        });

    }, { scope: experienceRef })

    return (
        <section id="experience"  ref={experienceRef}>
            <div className="section-content experience">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Experience
                </h1>
                <div className="experience-container">

                <div className="experience-item">
                        <div className="experience-item--header">
                            <span>Mendix | December 2023 - April 2024</span>
                            <h2>Front-End Developer (Contract)</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Led front-end development of a faculty management app for Stanford University School of Humanities and Sciences, supporting 70+ users</li>
                            <li>Worked closely with cross functional stakeholders including UI designers, business analysts, and other developers to translate business requirements into actionable items</li>
                            <li>Implemented a design system based on client's brand guidelines and web content as a reusable library of customized UI components with documentation</li>
                            <li>Performed in-app accessibility reviews using NVDA screen reader, axe DevTools, and keyboard navigation to comply with WCAG 2.0 standard and eliminate 100% of ADA violations</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>Mendix | August 2022 - August 2023</span>
                            <h2>Associate Front-End Developer</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Developed custom React-based components with HTML, CSS, and JavaScript with a focus on responsive design and visual consistency across platforms</li>
                            <li>Collaborated with team members and stakeholders on UX and full software development lifecycle: from scoping and design to documentation and deployment</li>
                            <li>Led enablement sessions for 4 major clients to consult on front-end best practices, application design, and high-quality user experiences</li>
                            <li>Participated in stand-ups and code reviews and delivered user stories and acceptance criteria on time</li>
                            <li>Executed UI refactoring of a Wells Fargo app to improve management of automated processed and adhere to accessibility standards</li>
                            <li>Designed internal application for sales team to increase client engagement and investment of UI/UX services</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>TimeSeries | February 2022 - August 2022</span>
                            <h2>Junior Application Developer</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Completed intensive Mendix platform training ahead of schedule, demonstrating quick learning skills and proficiency in OO programming and UI/UX design</li>
                            <li>Gathered requirements and advised clients on both business and technical domains, applying best practices in front-end development and OO design</li>
                            <li>Assisted in developing an internal Siemens app that supported enterprise integrations, ensuring scalability and maintainability</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='experience-line--container'>
                <div className='experience-line'></div>
            </div>

        </section>
    )
}

export default Experience;