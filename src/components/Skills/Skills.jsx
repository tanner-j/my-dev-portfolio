import React, { useState } from 'react'
import SkillInfo from './SkillInfo'
import JavaScriptLogo from '../../assets/js-logo.png'
import HTMLLogo from '../../assets/html-logo.png'
import CSSLogo from '../../assets/css-logo.png'
import SassLogo from '../../assets/sass-logo.png'
import MendixLogo from '../../assets/mendix-logo.png'
import JavaLogo from '../../assets/java-logo.png'
import CPlusPlusLogo from '../../assets/c++-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import TailwindLogo from '../../assets/tailwind-logo.png'
import BootstrapLogo from '../../assets/bootstrap-logo.png'
import GitLogo from '../../assets/git-logo.png'
import FigmaLogo from '../../assets/figma-logo.png'
import A11yLogo from '../../assets/a11y-logo.png'
import ScrumLogo from '../../assets/scrum-logo.png'
import './Skills.scss'


const Skills = () => {
    const skills = [
        {
            id: "1",
            name: "JavaScript",
            skillType: "Development",
            imageUrl: JavaScriptLogo,
            alt: "JavaScript icon",
            experience: "3+ years experience"
        },
        {
            id: "2",
            name: "HTML5",
            skillType: "Development",
            imageUrl: HTMLLogo,
            alt: "HTML5 icon",
            experience: "5+ years experience"
        },
        {
            id: "3",
            name: "CSS3",
            skillType: "Development",
            imageUrl: CSSLogo,
            alt: "CSS3 icon",
            experience: "5+ years experience"
        },
        {
            id: "4",
            name: "SASS/SCSS",
            skillType: "Development",
            imageUrl: SassLogo,
            alt: "SASS/SCSS icon",
            experience: "3+ years experience"
        },
        {
            id: "5",
            name: "Mendix (Intermediate)",
            skillType: "Development",
            imageUrl: MendixLogo,
            alt: "Mendix icon",
            experience: "2+ years experience"
        },
        {
            id: "6",
            name: "Java",
            skillType: "Development",
            imageUrl: JavaLogo,
            alt: "Java icon",
            experience: "4+ years experience"
        },
        {
            id: "7",
            name: "C++",
            skillType: "Development",
            imageUrl: CPlusPlusLogo,
            alt: "C++ icon",
            experience: "3+ years experience"
        },
        {
            id: "8",
            name: "ReactJS",
            skillType: "Development",
            imageUrl: ReactLogo,
            alt: "ReactJS icon",
            experience: "4+ years experience"
        },
        {
            id: "9",
            name: "Tailwind CSS",
            skillType: "Development",
            imageUrl: TailwindLogo,
            alt: "Tailwind CSS icon",
            experience: "4+ years experience"
        },
        {
            id: "10",
            name: "Bootstrap",
            skillType: "Development",
            imageUrl: BootstrapLogo,
            alt: "Bootstrap icon",
            experience: "4+ years experience"
        },
        {
            id: "11",
            name: "Git",
            skillType: "Development",
            imageUrl: GitLogo,
            alt: "Github icon",
            experience: "5+ years experience"
        },
        {
            id: "12",
            name: "Figma",
            skillType: "Design",
            imageUrl: FigmaLogo,
            alt: "Figma icon",
            experience: "3+ years experience"
        },
        {
            id: "13",
            name: "Web Accessibility",
            skillType: "Development",
            imageUrl: A11yLogo,
            alt: "Web accessibility icon",
            experience: "2+ years experience"
        },
        {
            id: "14",
            name: "Scrum",
            skillType: "Development",
            imageUrl: ScrumLogo,
            alt: "Scrum icon",
            experience: "4+ years experience"
        },
    ]

    // State to track the currently active filter
    const [activeFilter, setActiveFilter] = useState("all");

    // Function to handle filter clicks
    const handleFilterClick = (filterValue) => {
        setActiveFilter(filterValue);
    };

    return (
        <section id="skills" data-scroll data-scroll-speed="0.1">
            <div className="section-content skills">
                <h1 className="section-header">
                    <span className="text-color-primary">&#47; </span>
                    Skills
                </h1>
                <div className="skills-filters">
                    <label className={`filter-item ${activeFilter === "all" ? "filter-item--active" : ""}`} tabIndex="0" onClick={() => handleFilterClick("all")}>
                        All
                        <input type="radio" name="skillFilter" value="all"/>
                    </label>
                    <label className={`filter-item ${activeFilter === "Design" ? "filter-item--active" : ""}`} tabIndex="0" onClick={() => handleFilterClick("Design")}>
                        UI/UX Design
                        <input type="radio" name="skillFilter" value="design"/>
                    </label>
                    <label className={`filter-item ${activeFilter === "Development" ? "filter-item--active" : ""}`} tabIndex="0" onClick={() => handleFilterClick("Development")}>
                        Development
                        <input type="radio" name="skillFilter" value="development"/>
                    </label>
                </div>
                <div className="skills-container">
                    {skills.filter((skill) => activeFilter === "all" || skill.skillType === activeFilter)
                        .map((skill) => (
                            <SkillInfo
                                key={skill.id}
                                id={skill.id}
                                name={skill.name}
                                skillType={skill.skillType}
                                imageUrl={skill.imageUrl}
                                alt={skill.alt}
                                experience={skill.experience}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;