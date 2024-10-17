import React from 'react'
import ProjectCard from './ProjectCard'
import ClientsImg from '../../assets/project-clients-cover.svg'
import DesignSystemImg from '../../assets/project-design-system-cover.svg'
import ShowcaseImg from '../../assets/project-showcase-cover.svg'
import CFAQuizImg from '../../assets/project-cfa-quiz-cover.svg'
import './Projects.scss'

const Projects = () => {
    const projects = [
        {
            id: "logos",
            imageUrl: ClientsImg,
            alt: "Stanford University, Wells Fargo, Micron, Siemens, and Tokyo Century logos",
            title: "Recent Client Projects",
            tags: ["UI/UX Design", "Front-End Development", "Design System", "Accessibility", "Mendix"],
            description: "Many of my recent projects are internal or private, so I’m unable to share them publicly. However, I’ve had the great opportunity to work with a variety of customers at Mendix.",
            projectUrl: ""
        },
        {
            id: "designSystem",
            imageUrl: DesignSystemImg,
            alt: "Design System Starter App screenshots",
            title: "Design System Starter",
            tags: ["UI/UX Design", "Front-End Development", "Accessibility", "Figma", "Mendix"],
            description: "A downloadable starter package providing accessible components, tools, and documentation for designers and developers as a foundation for their own design system.",
            projectUrl: "https://designsystemstarter-sandbox.mxapps.io/",
        },
        {
            id: "showcase",
            imageUrl: ShowcaseImg,
            alt: "UI Showcase App screenshots",
            title: "UI Showcase App",
            tags: ["UI/UX Design", "Front-End Development", "Figma", "Mendix"],
            description: "A showcase application designed to exemplify UI services offered by the Mendix Expert Services design team in an effort to increase package sales.",
            projectUrl: "https://www.figma.com/file/2cra2xSoLghfy0V2KDhdDG/UI-Showcase-App?type=design&node-id=0%3A1&mode=design&t=FEuH7Y8GLrGY1h4v-1",
        },
        {
            id: "cfaQuiz",
            imageUrl: CFAQuizImg,
            alt: "Chick-fil-A Training Quiz App screenshots",
            title: "Chick-fil-A Training Quiz",
            tags: [],
            description: "Coming soon!",
            projectUrl: "",
        },
    ];

    // return (
    //     <section id="projects">
    //         <div className="section-content projects">
    //             <h1 className="section-header">
    //                 <span className="text-color-primary">&#47; </span>
    //                 Recent Work
    //             </h1>
    //             <div className="projects-container">
    //                 {projects.map((project) => (
    //                     <ProjectCard
    //                         key = {project.id}
    //                         id = {project.id}
    //                         imageUrl = {project.imageUrl}
    //                         alt = {project.alt}
    //                         title = {project.title}
    //                         tags = {project.tags}
    //                         description = {project.description}
    //                         projectUrl = {project.projectUrl}
    //                     />
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // )

    return (
        <section id="projects">
            <div className="section-content projects">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Work
                </h1>
                <div className="projects-container-v2">
                    {projects.map((project) => (
                        <ProjectCard
                            key = {project.id}
                            id = {project.id}
                            imageUrl = {project.imageUrl}
                            alt = {project.alt}
                            title = {project.title}
                            tags = {project.tags}
                            description = {project.description}
                            projectUrl = {project.projectUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;