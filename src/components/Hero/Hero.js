import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-geometric"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
            <h1 className="hero-title">
              BUILD YOUR
              <span className="gold"> LEGACY</span>
            </h1>
            
            <p className="hero-subtitle">
              Your personal AI mentor for peak physical and mental discipline.
            </p>
            
            <div className="hero-quote">
              <blockquote>
                "Work hard in silence. Let success be your noise."
              </blockquote>
              <cite>- Coach Chad</cite>
            </div>
            
            <div className="hero-actions">
              <button className="btn btn-primary hero-btn">
                EXECUTE
              </button>
              <button className="btn hero-btn-secondary">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>SCROLL TO DISCOVER</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
