import React from 'react';
import '../styles/Footer.css';

function Footer({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>ERPIANS is your trusted partner in SAP consulting and enterprise resource planning solutions.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => handleNavClick('home')}>Home</button></li>
              <li><button onClick={() => handleNavClick('about')}>About</button></li>
              <li><button onClick={() => handleNavClick('services')}>Services</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
            </ul>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ERPIANS TECHNOLOGY SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;