import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  
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
              
              <div className="philosophy">
                <h3>{t('thePhilosophy')}</h3>
                <blockquote>
                  "{t('philosophyQuote')}"
                </blockquote>
              </div>
              
              <div className="principles">
                <div className="principle">
                  <div className="principle-number">01</div>
                  <div className="principle-content">
                    <h4>{t('disciplineOver')}</h4>
                    <p>{t('disciplineDesc')}</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-number">02</div>
                  <div className="principle-content">
                    <h4>{t('silenceOver')}</h4>
                    <p>{t('silenceDesc')}</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-number">03</div>
                  <div className="principle-content">
                    <h4>{t('legacyOver')}</h4>
                    <p>{t('legacyDesc')}</p>
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
