import React from 'react';
import './style.css';

function Project(props) {
    return (
        <div className={props.classes}>
            <h2 className="project-title">{props.title}</h2>
            <a href={props.link}>
                <img src={props.image} alt={props.alt} className="project-image"/>
            </a>
        </div>
    );
};

export default Project;