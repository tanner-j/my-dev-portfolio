import React from 'react'

const Experience = () => {
    return (
        <section id="experience">
            <div className="section-content experience">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Experience
                </h1>
                <div className="experience-container">

                <div className="experience-item">
                        <div className="experience-item--header">
                            <span>Mendix | December 2023 - April 2024</span>
                            <h2>UI/UX Developer / Consultant (Contract)</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Led front-end development of a faculty management application for Stanford University School of Humanities and Sciences</li>
                            <li>Worked closely with development and product teams to align on enhancements that address customer needs, add value and reduce need for repetitive custom work</li>
                            <li>Implemented a design system based on research of client's branding and web content as a reusable library of customized UI components with documentation</li>
                            <li>Performed in-app accessibility reviews using NVDA screen reader, axe DevTools, and keyboard navigation to comply with WCAG 2.0 standard and eliminate 100% of ADA violations</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>Mendix | August 2022 - August 2023</span>
                            <h2>Associate UI/UX Developer / Consultant</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Served as a technical front-end expert of the Mendix platform and enabled clients' technical teams</li>
                            <li>Developed custom React-based components with HTML, CSS, and JavaScript to align with clients' brand identity and create visual consistency</li>
                            <li>Worked closely with design and back-end teams to ensure seamless integration of styled widgets/components</li>
                            <li>Conducted enablement sessions with 4 major clients to consult on front-end best practices, application design, and user experience</li>
                            <li>Participated in Scrum processes, scoping and delivering user stories and acceptance criteria on time</li>
                            <li>Executed the UI refactoring of a Wells Fargo application for improved management of automated processed and adherence to accessibility standards</li>
                            <li>Designed internal application for sales team to increase client engagement and investment of UI/UX services</li>
                        </ul>
                    </div>

                    <div className="experience-item">
                        <div className="experience-item--header">
                            <span>TimeSeries | February 2022 - August 2022</span>
                            <h2>Junior Solutions Developer / Consultant</h2>
                        </div>
                        <ul className="experience-item--list">
                            <li>Completed intensive Mendix platform training ahead of schedule, demonstrating quick learning skills and proficiency in object-oriented programming and UI design</li>
                            <li>Gained expertise in consulting, gathering requirements and advising clients in both business and technical domains</li>
                            <li>Assisted the development team on a Siemens application responsible for managing recipes with core enterprise integrations</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience;