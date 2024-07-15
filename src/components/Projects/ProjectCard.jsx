import React from 'react'
import externalLink from '../../assets/external-link.svg'

function ProjectCard(props, index) {
    const { id, imageUrl, alt, title, tags, description, projectUrl } = props;

    // Check if tags is an array
    const tagsArray = Array.isArray(tags) ? tags : [];

    const projectContainer = projectUrl ? (
        <a href={projectUrl} target="_blank" rel="noreferrer" className="project-item has-link" key={index} id={id}>
            <div className="project-item--image">
                <img src={imageUrl} alt={alt} loading="lazy" />
            </div>
            <div className="project-item--info">
                <div className="project-item-header--wrapper">
                    <h2 className="project-item--header">
                        {title}
                        <img src={externalLink} alt="external link icon"></img>
                    </h2>
                </div>
                <div className="project-item--tags">
                    {tagsArray.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <p className="project-item--description">{description}</p>
            </div>
        </a>

    ) : (
        <div className="project-item" key={index} id={id}>
            <div className="project-item--image">
                <img src={imageUrl} alt={alt} loading="lazy" />
            </div>
            <div className="project-item--info">
                <h2 className="project-item--header">{title}</h2>
                <div className="project-item--tags">
                    {tagsArray.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <p className="project-item--description">{description}</p>
            </div>
        </div>
    );

    return projectContainer;
}

export default ProjectCard;