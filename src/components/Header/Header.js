import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AuthModal from '../Auth/AuthModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Detect active section
      const sections = ['home', 'about', 'features', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo removed from here and moved into mobile menu */}
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Desktop Navigation Links */}
          <ul className="nav-links desktop">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => setActiveSection('home')}
              >
                {t('home')}
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => setActiveSection('about')}
              >
                {t('about')}
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className={activeSection === 'features' ? 'active' : ''}
                onClick={() => setActiveSection('features')}
              >
                {t('training')}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => setActiveSection('contact')}
              >
                {t('contact')}
              </a>
            </li>
          </ul>
          
          {/* Mobile Navigation Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            {/* Logo added here inside the mobile menu */}
            <div className="mobile-logo">
              <img src="/assets/img/logo2.png" alt="Chad.AI Logo" className="logo-image" />
            </div>
            <ul className="menu-items">
              <li>
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''} 
                  onClick={() => {setIsMobileMenuOpen(false); setActiveSection('home');}}
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''} 
                  onClick={() => {setIsMobileMenuOpen(false); setActiveSection('about');}}
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  className={activeSection === 'features' ? 'active' : ''} 
                  onClick={() => {setIsMobileMenuOpen(false); setActiveSection('features');}}
                >
                  {t('training')}
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''} 
                  onClick={() => {setIsMobileMenuOpen(false); setActiveSection('contact');}}
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
            
            {/* Mobile Menu Buttons */}
            <div className="mobile-menu-buttons">
              <button 
                className="language-toggle mobile" 
                onClick={toggleLanguage}
                title={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
                aria-label={`Current language: ${language === 'en' ? 'English' : 'Indonesian'}. Click to switch.`}
              >
                <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
                <span className="separator">|</span>
                <span className={`lang-text ${language === 'id' ? 'active' : ''}`}>ID</span>
              </button>
              
              <button 
                className="btn btn-primary mobile-cta" 
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t('startNow')}
              </button>
            </div>
          </div>
          
          <div className="nav-actions">
            <button 
              className="language-toggle" 
              onClick={toggleLanguage}
              title={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
              aria-label={`Current language: ${language === 'en' ? 'English' : 'Indonesian'}. Click to switch.`}
            >
              <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
              <span className="separator">|</span>
              <span className={`lang-text ${language === 'id' ? 'active' : ''}`}>ID</span>
            </button>
            
            <button 
              className="btn btn-primary" 
              onClick={() => setIsAuthModalOpen(true)}
            >
              {t('startNow')}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
