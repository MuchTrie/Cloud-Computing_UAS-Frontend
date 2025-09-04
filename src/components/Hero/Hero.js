import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AuthModal from '../Auth/AuthModal';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useLanguage();

  // Simple fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img 
          src="/assets/img/hero.jpg" 
          alt="Athletic Chad silhouette" 
          className="hero-image"
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              {t('buildLegacy')}
              <span style={{ color: "#FFD700", textShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}> {t('legacy')}</span>
            </h1>
            
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary hero-btn"
                onClick={() => setIsAuthModalOpen(true)}
              >
                {t('execute')}
              </button>
              <button 
                className="btn hero-btn-secondary"
                onClick={() => {
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
