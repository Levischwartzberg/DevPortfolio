import {React, useState, useEffect, useRef} from 'react';
import Popup from '../Popup';
import './style.css';

function Project(props) {
    const [popup, setPopup] = useState(false);

    function showPopup() {
        setPopup(true);
    }

    function closePopup(event) {
        // console.log(event.target.className);
        if (event.target.className != "popup") {
            setPopup(false);
        };
    }

    return (
        <div className={props.classes}>
            <h2 className="project-title">{props.title}</h2>
            <button onClick={showPopup}>
                <img src={props.image} alt={props.alt} className="project-image"/>
            </button>
            {popup===true && <Popup closePopup={closePopup} title={props.title} link={props.link} image={props.image} alt={props.alt} description={props.description}/>}
        </div>
    );
};

export default Project;