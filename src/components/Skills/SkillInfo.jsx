import React from 'react'

function SkillInfo(props) {
    const { id, name, skillType, imageUrl, alt, experience } = props;

    return (
                <div className="skill-item" data-skill-type={skillType} key={id}>
                    <div className="skill-icon">
                        <img src={imageUrl} alt={alt} loading="lazy"></img>
                    </div>
                    <div className="skill-info">
                        <p className="font-semibold text-lg">{name}</p>
                        <span className="text-color-font-detail">{experience}</span>
                    </div>
                </div>
    );
}

export default SkillInfo;