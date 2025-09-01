import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Features.css';

const Features = () => {
  const { t } = useLanguage();
  
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
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
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
