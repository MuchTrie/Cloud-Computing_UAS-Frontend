import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-text">COACH CHAD</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#features">TRAINING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          
          <div className="nav-cta">
            <button className="btn btn-primary">START NOW</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
