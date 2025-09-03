import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import AuthModal from '../Auth/AuthModal';
import './CTA.css';

const CTA = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              {t('legacyAwaits')}
              <span className="gold"> {t('awaits')}</span>
            </h2>
            
            <p className="cta-subtitle">
              {t('ctaSubtitle')}
            </p>
            
            <div className="cta-quote">
              <blockquote>
                "{t('ctaQuote')}"
              </blockquote>
              <cite>{t('quoteAuthor')}</cite>
            </div>
          </div>
          
          <div className="cta-actions">
            <div className="action-primary">
              <button 
                className="btn btn-primary cta-btn-primary"
                onClick={() => setIsAuthModalOpen(true)}
              >
                {t('executeNow')}
              </button>
              <p className="action-note">{t('startToday')}</p>
            </div>
            
            <div className="action-secondary">
              <button className="btn cta-btn-secondary">
                {t('learnMethod')}
              </button>
              <p className="action-note">{t('discoverPhilosophy')}</p>
            </div>
          </div>
        </div>
        
        <div className="cta-stats">
          <div className="stat-item">
            <div className="stat-icon">💪</div>
            <div className="stat-info">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('aiGuidance')}</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-number">∞</span>
              <span className="stat-label">{t('potential')}</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">👑</div>
            <div className="stat-info">
              <span className="stat-number">1</span>
              <span className="stat-label">{t('lifetime')}</span>
            </div>
          </div>
        </div>
        
        <div className="final-message">
          <p className="message-text">
            {t('finalMessage')}
          </p>
          <div className="message-signature">
            {t('quoteAuthor')}
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

export default CTA;
