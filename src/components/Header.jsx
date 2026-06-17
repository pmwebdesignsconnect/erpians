import React from 'react';
import '../styles/Header.css';

function Header({ currentPage, setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Addition Consulting Logo" className="logo-img" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <button
                className={currentPage === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={currentPage === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={currentPage === 'founding' ? 'active' : ''}
                onClick={() => handleNavClick('founding')}
              >
                Founding
              </button>
            </li>
            <li>
              <button
                className={currentPage === 'services' ? 'active' : ''}
                onClick={() => handleNavClick('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={currentPage === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;