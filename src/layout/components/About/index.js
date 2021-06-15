import React from 'react';
import './style.css';
import Portrait from '../../../images/Portrait.png';

function About() {
    return (
        <div className="background">
            <div id="bio" className="row">
                <div className="portrait col-12 col-md-3 col-lg-4">
                    <img id="portrait" src={Portrait} alt="Photo of me sitting on a tree"/>
                </div>
                <div className="col-12 col-md-2 col-lg-1"></div>
                <div id="bio-text" className="col-12 col-md-7 col-lg-7">
                    <h2 id="bio-header">Bio</h2>
                    <p>
                            Levi Schwartzberg is a budding developer who is based in Minneapolis. Levi has a B.S. in Physics from the University of Minnesota, which provides some of the analytical impetus for development.
                            In addition to working on app and web development, Levi enjoys solving more scientific problems, like exploring Fourier analysis and sound synthesis, as well as raw physics and mathematics, such as solving differential equations computationally with C++ scripts.
                            He hopes to continue to devlop his skills to build more and more intricate, but also practical applications. 
                            <br/>
                            <br/>
                            In addition to coding, Levi's other career path involves performing and working as a professional musician. 
                            He has recorded several records with a variety of different bands, and has travelled throughout the Midwest and even all the way to France to perform. 
                            When not playing music or coding, one would likely find Levi enjoying one of his outdoor pursuits. He is an avid cross country skier, and also enjoys climbing and strength training.
                            During the summer months, Levi also plays plenty of golf and softball. He also enjoys painting and cooking. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;