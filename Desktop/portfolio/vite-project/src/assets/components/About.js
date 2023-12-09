import React from 'react';

class AboutSection extends React.Component {
    render() {
      return (
        <section id="about" style={aboutSectionStyle}>
          <h2 style={headingStyle}>About Me</h2>
          <p style={paragraphStyle}>Hi, I'm Mira Awaida. A Web Developer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
            Eager to obtain a challenging position that will expand my learning and build upon my developer skills.
           </p>
           <h3 style={subHeadingStyle}>My Skills</h3>
           <ul style={skillsListStyle}>
            <li>HTML or CSS skills</li>
            <li>JavaScript Skills</li>
            <li>Git</li>
            <li>Back-End Web Programming Languages</li>
            <li>Responsive Web Design Skills</li>
            <li>Testing and Debugging Skills</li>
           </ul>
        </section>
      );
    }
  }

  const aboutSectionStyle = {
    background: '#f9f9f9',
    padding: '50px',
    textAlign: 'center',
  };
  
  const headingStyle = {
    color: '#333',
  };
  
  const paragraphStyle = {
    color: '#555',
    lineHeight: '1.6',
  };
  
  const subHeadingStyle = {
    color: '#333',
    marginTop: '20px',
  };
  
  const skillsListStyle = {
    listStyleType: 'none',
    padding: '0',
  };
export default About;