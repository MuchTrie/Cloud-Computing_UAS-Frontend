import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import VanillaTilt from 'vanilla-tilt';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const titleRef = useRef(null);
  const quoteRef = useRef(null);
  const btnPrimaryRef = useRef(null);
  const btnSecondaryRef = useRef(null);

  // Initialize tilt effects
  useEffect(() => {
    setIsVisible(true);
    
    // Title 3D effect
    if (titleRef.current) {
      VanillaTilt.init(titleRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.02
      });
    }
    
    // Quote 3D effect
    if (quoteRef.current) {
      VanillaTilt.init(quoteRef.current, {
        max: 10,
        speed: 400,
        perspective: 1000,
        scale: 1.05
      });
    }
    
    // Primary button 3D effect
    if (btnPrimaryRef.current) {
      VanillaTilt.init(btnPrimaryRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.05
      });
    }
    
    // Secondary button 3D effect
    if (btnSecondaryRef.current) {
      VanillaTilt.init(btnSecondaryRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05
      });
    }
    
    // Cleanup
    return () => {
      if (titleRef.current && titleRef.current.vanillaTilt) {
        titleRef.current.vanillaTilt.destroy();
      }
      if (quoteRef.current && quoteRef.current.vanillaTilt) {
        quoteRef.current.vanillaTilt.destroy();
      }
      if (btnPrimaryRef.current && btnPrimaryRef.current.vanillaTilt) {
        btnPrimaryRef.current.vanillaTilt.destroy();
      }
      if (btnSecondaryRef.current && btnSecondaryRef.current.vanillaTilt) {
        btnSecondaryRef.current.vanillaTilt.destroy();
      }
    };
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
          <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
            <h1 className="hero-title tilt-3d" ref={titleRef}>
              <span className="title-3d-wrapper">
                {t('buildLegacy')}
                <span className="gold"> {t('legacy')}</span>
              </span>
            </h1>
            
            <p className="hero-subtitle">
              {t('heroSubtitle')}
            </p>
            
            <div className="hero-quote tilt-3d" ref={quoteRef}>
              <div className="quote-3d-wrapper">
                <blockquote>
                  "{t('heroQuote')}"
                </blockquote>
                <cite>{t('quoteAuthor')}</cite>
              </div>
            </div>
            
            <div className="hero-actions">
              <button className="btn btn-primary hero-btn tilt-3d" ref={btnPrimaryRef}>
                {t('execute')}
              </button>
              <button className="btn hero-btn-secondary tilt-3d" ref={btnSecondaryRef}>
                {t('learnMore')}
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
