import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">COACH CHAD</h3>
            <p className="footer-tagline">
              {t('buildLegacyTagline')}
            </p>
            
            <div className="footer-quote">
              <p>"{t('championsQuote')}"</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>{t('training')}</h4>
              <ul>
                <li><a href="#strength">{t('strengthBuilding')}</a></li>
                <li><a href="#discipline">{t('mentalDiscipline')}</a></li>
                <li><a href="#habits">{t('habitFormation')}</a></li>
                <li><a href="#nutrition">{t('nutritionGuidance')}</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>PHILOSOPHY</h4>
              <ul>
                <li><a href="#mindset">{t('alphaMindset')}</a></li>
                <li><a href="#discipline">{t('disciplineMotivation')}</a></li>
                <li><a href="#legacy">{t('legacyBuildingNav')}</a></li>
                <li><a href="#excellence">{t('excellenceStandards')}</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>{t('contact')}</h4>
              <ul>
                <li><a href="#start">{t('startTraining')}</a></li>
                <li><a href="#support">{t('support')}</a></li>
                <li><a href="#community">{t('joinCommunity')}</a></li>
                <li><a href="#feedback">{t('feedback')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-principles">
            <div className="principle-item">
              <span className="principle-icon">💪</span>
              <span className="principle-text">{t('strength')}</span>
            </div>
            <div className="principle-item">
              <span className="principle-icon">🎯</span>
              <span className="principle-text">{t('focus')}</span>
            </div>
            <div className="principle-item">
              <span className="principle-icon">👑</span>
              <span className="principle-text">{t('legacyFooter')}</span>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-final">
            <p className="copyright">
              {t('copyright')}
            </p>
            
            <div className="footer-motto">
              <p>{t('motto')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
