import React from 'react'
import ProjectCard from './ProjectCard'
import LogosImg from '../../assets/projects-logos.png'
import DesignSystemImg from '../../assets/project-designsystem.png'
import ShowcaseImg from '../../assets/project-showcase.png'
import './Projects.scss'

const Projects = () => {
    const projects = [
        {
            id: "logos",
            imageUrl: LogosImg,
            alt: "Wells Fargo, Micron, Siemens, and Tokyo Century logos",
            title: "Recent Client Projects",
            tags: ["UI/UX Design", "Front-End Development", "Design System", "Accessibility", "Mendix"],
            description: "Several of my recent projects are internal or private, preventing me from sharing them publicly. With that being said, here are a few of the customers I have worked with at Mendix.",
            projectUrl: ""
        },
        {
            id: "designSystem",
            imageUrl: DesignSystemImg,
            alt: "Design System Starter screenshot",
            title: "Design System Starter",
            tags: ["UI/UX Design", "Front-End Development", "Accessibility", "Figma", "Mendix"],
            description: "A downloadable starter package providing accessible components, tools, and documentation for designers and developers as a foundation for their own design system.",
            projectUrl: "https://designsystemstarter-sandbox.mxapps.io/",
        },
        {
            id: "showcase",
            imageUrl: ShowcaseImg,
            alt: "UI Showcase App screenshot",
            title: "UI Showcase App",
            tags: ["UI/UX Design", "Front-End Development", "Figma", "Mendix"],
            description: "A showcase application designed to exemplify UI services offered by the Mendix Expert Services design team in an effort to increase package sales.",
            projectUrl: "https://www.figma.com/file/2cra2xSoLghfy0V2KDhdDG/UI-Showcase-App?type=design&node-id=0%3A1&mode=design&t=FEuH7Y8GLrGY1h4v-1",
        },
    ];

    return (
        <section id="projects">
            <div className="section-content projects">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Recent Work
                </h1>
                <div className="projects-container">
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