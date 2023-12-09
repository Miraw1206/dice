import React from 'react';

class Header extends React.Component {
    handleNavBarClick = (section) => {
    console.log(`Navigating to ${section}`);
    
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
 };
 render() {
    return (
      <header style={headerStyle}>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle} onClick={() => this.handleNavigationClick("hero")}>
              <a href="#hero">Home</a>
            </li>
            <li style={navItemStyle} onClick={() => this.handleNavigationClick("projects")}>
              <a href="#projects">Projects</a>
            </li>
            <li style={navItemStyle} onClick={() => this.handleNavigationClick("contact")}>
              <a href="#contact">Contact</a>
            </li>
            <li style={navItemStyle} onClick={() => this.handleNavigationClick("about")}>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
    }
}

const headerStyle = {
  background: '#333',
  padding: '1rem',
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

const navItemStyle = {
  margin: '0 10px',
};

export default Header;