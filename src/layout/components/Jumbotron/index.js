import React from 'react';
import Vibraphone from '../../../images/Vibraphone.jpg';
import './style.css';

function Jumbotron() {
    return (
        <div className="jumbo">
            <h1 id="jumbo-title"> Levi Schwartzberg: Full Stack Developer</h1>
            <img src={Vibraphone} alt=""/>
        </div>
    );
};

export default Jumbotron;