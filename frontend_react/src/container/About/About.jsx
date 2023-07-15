import React from 'react';
import './About.scss';

function About() {
    return (
        <section className="about-section">
            <div className="banner">
                <h2>About Us</h2>
            </div>
            <div className="about-info">
                <div className="opening-times">
                    <h3>Opening Times</h3>
                    <p>Monday - Friday: 8:00am - 8:00pm</p>
                    <p>Saturday - Sunday: 9:00am - 10:00pm</p>
                </div>
                <div className="cafe-info">
                    <h3>About Our Cafe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </section>
    );
}

export default About;