import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <h2>About Us</h2>

            <p>
                Welcome to CourseHub!

                CourseHub is a centralized platform for students to view their peers' feedback on UBC courses.
                Students also have the ability to log in and provide their own ratings and reviews for courses based on their own experiences.
            </p>
            <br/>

            <h4>The Team: </h4>
            <p>
                Winnie Chan (wwyc)<br/>
                Illean Zhang (illeanz)<br/>
                Aaron Ngu (aaronNgu)<br/>
                Spandana Baruah (Spandana-Baruah)
            </p>
        </div>
    );
};

export default AboutPage;