import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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
            <span className="logo-text">Fit-Chad AI</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">{t('home')}</a></li>
            <li><a href="#about">{t('about')}</a></li>
            <li><a href="#features">{t('training')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
          </ul>
          
          <div className="nav-actions">
            <button 
              className="language-toggle" 
              onClick={toggleLanguage}
              title={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
              aria-label={`Current language: ${language === 'en' ? 'English' : 'Indonesian'}. Click to switch.`}
            >
              <span className={`flag ${language === 'en' ? 'active' : ''}`}>🇺🇸</span>
              <span className="separator">|</span>
              <span className={`flag ${language === 'id' ? 'active' : ''}`}>🇮🇩</span>
            </button>
            
            <button className="btn btn-primary">{t('startNow')}</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
