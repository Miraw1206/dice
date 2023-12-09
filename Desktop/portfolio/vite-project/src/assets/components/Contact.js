import React from 'react';

class Contact extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
          name: e.target.elements.name.value,
          email: e.target.elements.email.value,
          message: e.target.elements.message.value,
        };
        console.log('Form submitted:', formData);
    
        e.target.reset();
      };
    render() {
      return (
        <section id="contact" style={contactSectionStyle}>
          <h2 style={headingStyle}>Contact Me</h2>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <label htmlFor="name" style={labelStyle}>Name:</label>
            <input type="text" id="name" name="name" style={inputStyle} required />
  
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input type="email" id="email" name="email" style={inputStyle} required />
  
            <label htmlFor="message" style={labelStyle}>Message:</label>
            <textarea id="message" name="message" style={textareaStyle} required></textarea>
  
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </section>
      );
    }
  }

  const contactSectionStyle = {
    background: '#f6f6f6',
    padding: '50px',
    textAlign: 'center',
  };
  
  const headingStyle = {
    color: '#333',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: 'auto',
  };
  
  const labelStyle = {
    marginBottom: '8px',
    color: '#555',
  };
  
  const inputStyle = {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
  
  const textareaStyle = {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
  };
  
  const buttonStyle = {
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
export default Contact;
