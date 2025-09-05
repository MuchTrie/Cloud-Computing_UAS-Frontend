import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import VanillaTilt from 'vanilla-tilt';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  const principle1Ref = useRef(null);
  const principle2Ref = useRef(null);
  const principle3Ref = useRef(null);
  const philosophyRef = useRef(null);
  
  useEffect(() => {
    // Apply 3D effect to principles
    const principles = [principle1Ref, principle2Ref, principle3Ref];
    const principleNodes = principles.map(ref => ref.current);
    principleNodes.forEach(node => {
      if (node) {
        VanillaTilt.init(node, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.05,
          perspective: 1000
        });
      }
    });

    // Apply 3D effect to philosophy quote
    const philosophyNode = philosophyRef.current;
    if (philosophyNode) {
      VanillaTilt.init(philosophyNode, {
        max: 10,
        speed: 400,
        scale: 1.059
      });
    }

    // Cleanup
    return () => {
      principleNodes.forEach(node => {
        if (node && node.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
      if (philosophyNode && philosophyNode.vanillaTilt) {
        philosophyNode.vanillaTilt.destroy();
      }
    };
  }, []);
  
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              {t('meetMentor')}
              <span className="gold"> {t('mentor')}</span>
            </h2>
            
            <div className="about-description">
              <p className="lead">
                {t('aboutDescription')}
              </p>
              
              <div className="philosophy tilt-3d" ref={philosophyRef}>
                <div className="philosophy-3d-content">
                  <h3>{t('thePhilosophy')}</h3>
                  <blockquote>
                    "{t('philosophyQuote')}"
                  </blockquote>
                </div>
              </div>
              
              <div className="principles">
                <div className="principle tilt-3d" ref={principle1Ref}>
                  <div className="principle-3d-content">
                    <div className="principle-number">01</div>
                    <div className="principle-content">
                      <h4>{t('disciplineOver')}</h4>
                      <p>{t('disciplineDesc')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="principle tilt-3d" ref={principle2Ref}>
                  <div className="principle-3d-content">
                    <div className="principle-number">02</div>
                    <div className="principle-content">
                      <h4>{t('silenceOver')}</h4>
                      <p>{t('silenceDesc')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="principle tilt-3d" ref={principle3Ref}>
                  <div className="principle-3d-content">
                    <div className="principle-number">03</div>
                    <div className="principle-content">
                      <h4>{t('legacyOver')}</h4>
                      <p>{t('legacyDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="quote-card">
              <div className="quote-content">
                <span className="quote-mark">"</span>
                <p>{t('todayQuote')}</p>
                <span className="quote-mark">"</span>
              </div>
              <div className="quote-author">{t('quoteAuthor')}</div>
            </div>
            
            <div className="stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">{t('transformed')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">{t('commitment')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">{t('potential')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
