import React from 'react';
import Project from '../Project';
import MusicLab from '../../../images/MusicLab.jpg';
import Tech from '../../../images/techblog.jpg';
import Hackamole from '../../../images/Hackamole.jpg';
import Campground from '../../../images/Campground.jpg';
import Quiz from '../../../images/quiz.jpg';
import './style.css';

function Portfolio() {
    const musicLabDesc = "Music Lab is a community website where users can create accounts, create music with preset sounds, and then share and comment on other users songs. For this project, I constructed the entire drag and drop functionality (vanilla JS), configured the audio play algorithms, managed the database (MySQL), and assisted with the handlebars layout. I also composed and recorded all the sound clips.";
    const hackaMoleDesc = "Hack-a-Mole is a version of the classic Whack-a-Mole arcade game. The project uses the full MERN stack to control game logic, data flow, and the server. I focused mainly on creating the game logic with React state. I assisted with the database (MongoDB) and component creation. I also composed and recorded the video game music.";
    const campDesc = "Campground finder is a web application that allows users to search for campgrounds at national parks. A user enters in a city and the application uses and API to find all the nearest campgrounds to that city. The user can then select a specific campsite and view details about it, including the upcoming weather, and google maps directions. My role in the project was to configure the national parks API calls based on the search, sort the data, and then display it. I also built the weather API functionality.";
    const techDesc = "Tech Blog is an exercise in managing user data in a forum-like setting. Users can create accounts, and then create posts and comment on existing posts. I built this using handlebars and javascript. Data is managed with MySQL."
    const quizDesc = "This code quiz was created as an exercise in vanilla javascript. I used timers to govern a quiz that randomly chooses a random question from an array and notifies the user when they answer if they are correct. The app keeps track of the score and then can store the users info and their score in local storage upon completion."

    return (
        <div className="portfolio-background">
            <div className="portfolio" id="portfolio">
                <h2>Portfolio</h2>
                <div className="row">
                    <Project classes="card col-12" title="Music Lab" image={MusicLab} link="https://polar-lake-37415.herokuapp.com/" alt="Music Lab homepage" description={musicLabDesc}/>
                    <Project classes="card col-12 col-lg-6" title="Hack-a-Mole" image={Hackamole} link="https://enigmatic-sierra-05882.herokuapp.com/" alt="Hack-a-Mole sample gameplay" description={hackaMoleDesc}/>
                    <Project classes="card col-12 col-lg-6" title="Campground Finder" image={Campground} link="https://lpaschka37.github.io/Project1/" alt="Sample campground info page" description={campDesc}/>
                    <Project classes="card col-12 col-lg-6" title="Tech Blog" image={Tech} link="https://still-sands-34680.herokuapp.com/" alt="Sample blog post previews" description={techDesc}/>
                    <Project classes="card col-12 col-lg-6" title="Code Quiz" image={Quiz} link="https://levischwartzberg.github.io/Code_Quiz/" description={quizDesc}/>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;