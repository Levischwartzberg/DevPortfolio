import React from 'react';
import './style.css';

function Popup(props) {
    return (
        <div className="popup-background" onClick={props.closePopup}>
            <div className="popup">
                <div className="row">
                    <div className="col-11">
                        <h2 className="project-title">{props.title}</h2>
                    </div>
                    <div className="col-1 close-button">
                        <button onClick={props.closePopup}> X </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 project-info">
                        <span> View Project Here:{" "} 
                            <a href={props.link}>
                                {props.link}
                            </a>
                        </span>
                        <p></p>
                        <p className="project-description">
                            {props.description}
                        </p>
                    </div>
                    <div className="col-12 col-md-7 preview">
                        <img src={props.image} alt={props.alt} className="project-image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;