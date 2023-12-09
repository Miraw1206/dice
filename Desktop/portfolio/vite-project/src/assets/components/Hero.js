import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <section id="hero" style={heroStyle}>
                <h1 style={headingStyle}>Welcome to My Personal Site</h1>
                <h2 style={headingStyle}>Web Developer</h2>
                <p>
Experienced web developer with proficiency in HTML, CSS, and JavaScript, specializing in creating responsive and visually appealing websites.
 Proven track record of delivering high-quality projects on time,
 with a keen eye for detail and a passion for innovative web development solutions.</p>
            </section>
        )
    }
}

const heroStyle = {
    background: '#f0f0f0',
    padding: '50px',
    textAlign: 'center',
  };
  
  const headingStyle = {
    color: '#333',
  };
  
export default Hero;
