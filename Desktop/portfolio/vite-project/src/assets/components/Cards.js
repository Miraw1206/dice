import React from 'react';

const projects = [
  {
    title: 'Project 1',
    imageSrc: 'url1',
    link: '#',
  },
  {
    title: 'Project 2',
    imageSrc: 'url2',
    link: '#',
  },
  {
    title: 'Project 3',
    imageSrc: 'url3',
    link: '#',
  },
];

class Cards extends React.Component {
  state = {
    showDetails: false,
  };

  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    return (
      <section id="projects" style={cardsSectionStyle}>
        {projects.map((project, index) => (
          <div className="card" key={index} style={cardStyle}>
            <h2 style={cardTitleStyle}>{project.title}</h2>
            <img src={project.imageSrc} alt={project.title} style={cardImageStyle} />

            {this.state.showDetails && (
              <div style={cardDetailsStyle}>
                <p>{project.description}</p>
                <a href={project.link}>Learn More</a>
              </div>
            )}

            <button onClick={this.toggleDetails} style={toggleButtonStyle}>
              {this.state.showDetails ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
        ))}
      </section>
    );
  }
}

const cardsSectionStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '20px 0',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
};

const cardTitleStyle = {
  color: '#333',
};

const cardImageStyle = {
  maxWidth: '100%',
  height: 'auto',
  margin: '10px 0',
};

const cardDetailsStyle = {
  marginTop: '10px',
};

const toggleButtonStyle = {
  padding: '10px',
  background: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Cards;
