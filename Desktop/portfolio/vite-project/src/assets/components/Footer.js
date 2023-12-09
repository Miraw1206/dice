import React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <footer style={footerStyle}>
          <p>&copy; Mira Awaida</p>
          {"https://www.facebook.com/profile.php?id=655900963"}
          {"https://www.instagram.com/miraawaida/"}
        </footer>
      );
    }
  }
  
  const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
  };

export default Footer;
