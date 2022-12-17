import React from "react";
import PortfolioPhoto from "../static/placeholderPhoto.jpg";

const AboutMe = () => {
    return(
        <div style={{ display: 'flex', width: '80%', margin: 'auto' }}>
            <img src={PortfolioPhoto} style={{ width: '50%', height: '50%', marginRight: '2em' }}/>
            <p>
                I’m a software developer who loves problem-solving, collaborating, and innovating! I lie in the intersection of CS and Design where I believe that user-centered design is essential for creating intuitive and effective applications. I’m eager to contribute to society through my skills in JavaScript, Python, React, and Figma, and am passionate about promoting diversity and inclusion through mentoring younger generations. I study CS and Design at Northwestern University and am an incoming software engineer at Nextdoor. I am open and excited to tackle small freelance projects, contact me if interested!
            </p>
        </div>
    );
}

export default AboutMe;