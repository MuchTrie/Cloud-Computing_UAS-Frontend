import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import VanillaTilt from 'vanilla-tilt';
import './Features.css';

const Features = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const featureCards = useRef([]);
  
  // Initialize featureCards array
  useEffect(() => {
    // Reset the array when features change
    featureCards.current = [];
  }, []);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Initialize 3D tilt effect on feature cards
  useEffect(() => {
    // Only apply tilt if cards exist and the featureCards.current is an array
    if (featureCards.current && Array.isArray(featureCards.current)) {
      // Filter out any null or undefined values
      const validCards = featureCards.current.filter(card => card);
      
      validCards.forEach(card => {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.3,
          scale: 1.05,
          perspective: 1000
        });
      });
      
      // Cleanup function
      return () => {
        validCards.forEach(card => {
          if (card && card.vanillaTilt) {
            card.vanillaTilt.destroy();
          }
        });
      };
    }
    
    // Return empty cleanup if no valid cards
    return () => {};
  }, []);
  
  const features = [
    {
      icon: '⚡',
      title: t('instantPrecision'),
      description: t('instantDesc'),
      details: ['AI-powered workout optimization', 'Real-time form corrections', 'Adaptive intensity scaling']
    },
    {
      icon: '🎯',
      title: t('laserFocus'),
      description: t('focusDesc'),
      details: ['Goal-oriented programming', 'Distraction elimination protocols', 'Mental discipline training']
    },
    {
      icon: '💀',
      title: t('zeroCompromise'),
      description: t('compromiseDesc'),
      details: ['Progressive overload systems', 'Accountability frameworks', 'Performance tracking']
    },
    {
      icon: '👑',
      title: t('legacyBuilding'),
      description: t('buildingDesc'),
      details: ['Long-term transformation', 'Character development', 'Sustainable excellence']
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">
            {t('chadMethod')}
            <span className="gold"> {t('method')}</span>
          </h2>
          <p className="section-subtitle text-center">
            {t('featuresSubtitle')}
          </p>
        </div>
        
        <div className="features-grid parallax-container">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card tilt-3d" 
              ref={el => {
                if (el) {
                  featureCards.current[index] = el;
                }
              }}
              style={{
                transform: `translateY(${(scrollY * 0.05 * (index % 2 === 0 ? 1 : -1))}px)`
              }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="feature-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <div className="cta-content">
            <h3>{t('readyBegin')}</h3>
            <p>{t('pathGreatness')}</p>
            <button className="btn btn-primary">{t('startTransformation')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
