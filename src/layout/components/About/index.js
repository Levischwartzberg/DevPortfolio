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
                            My name is Levi and I am a full stack developer who is based in Minneapolis. I have a B.S. in Physics from the University of Minnesota, which has provided me not only with certain specialized technical know how, but also with general problem solving and research skills that are useful in web development and coding.
                            In addition to working on app and web development, I enjoy solving more scientific problems, like exploring Fourier analysis and sound synthesis, as well as raw physics and mathematics, such as solving differential equations computationally with C++ scripts.
                            I am always looking for new fun and challenging projects where I can expand both my coding skills and my technical or scientific abilities. 
                            <br/>
                            <br/>
                            In addition to coding, my other career path involves performing and working as a professional musician. 
                            I have recorded several records with a variety of different bands, and have travelled throughout the Midwest and even all the way to France to perform. 
                            If not playing music or coding, one would likely find me enjoying one of my outdoor pursuits. I am an avid cross country skier, and also enjoy climbing and strength training.
                            During the summer months, I also play plenty of golf and softball. Additionally, I enjoy painting and cooking.  
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;