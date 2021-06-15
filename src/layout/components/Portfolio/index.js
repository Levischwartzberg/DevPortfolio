import React from 'react';
import Project from '../Project';
import MusicLab from '../../../images/MusicLab.jpg';
import Kitchen from '../../../images/kitchen.jpg';
import Hackamole from '../../../images/Hackamole.jpg';
import Campground from '../../../images/Campground.jpg';
import Weather from '../../../images/Weather.jpg';
import './style.css';

function Portfolio() {
    return (
        <div className="portfolio-background">
            <div className="portfolio" id="portfolio">
                <h2>Portfolio</h2>
                <div className="row">
                    <Project classes="card col-12" title="Music Lab" image={MusicLab} link="https://polar-lake-37415.herokuapp.com/" alt="Music Lab homepage image"/>
                    <Project classes="card col-12 col-lg-6" title="Hack-a-Mole" image={Hackamole} link="https://enigmatic-sierra-05882.herokuapp.com/" alt="Hack-a-Mole sample gameplay"/>
                    <Project classes="card col-12 col-lg-6" title="Levi's Kitchen" image={Kitchen} link="https://levischwartzberg.github.io/Levis_Kitchen/" alt="Restaurant homepage image"/>
                    <Project classes="card col-12 col-lg-6" title="Campground Finder" image={Campground} link="https://lpaschka37.github.io/Project1/" alt="Sample campground info page"/>
                    <Project classes="card col-12 col-lg-6" title="Weather Dashboard" image={Weather} link="https://levischwartzberg.github.io/Weather_Dashboard/"/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;