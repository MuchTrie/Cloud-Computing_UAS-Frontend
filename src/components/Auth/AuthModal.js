import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useLanguage();
  
  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-modal-close" onClick={onClose}>×</button>
        
        <div className="auth-modal-header">
          <h2>{isLogin ? t('login') : t('register')}</h2>
          <p className="auth-subtitle">{isLogin ? t('welcomeBack') : t('joinTheMovement')}</p>
        </div>
        
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(true)}
          >
            {t('login')}
          </button>
          <button 
            className={`auth-tab ${!isLogin ? 'active' : ''}`} 
            onClick={() => setIsLogin(false)}
          >
            {t('register')}
          </button>
        </div>
        
        <div className="auth-modal-body">
          {isLogin ? (
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email">{t('email')}</label>
                <input type="email" id="email" placeholder={t('enterEmail')} />
              </div>
              <div className="form-group">
                <label htmlFor="password">{t('password')}</label>
                <input type="password" id="password" placeholder={t('enterPassword')} />
                <div className="forgot-password">
                  <a href="#forgot">{t('forgotPassword')}</a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                {t('login')}
              </button>
            </form>
          ) : (
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="name">{t('fullName')}</label>
                <input type="text" id="name" placeholder={t('enterName')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('email')}</label>
                <input type="email" id="email" placeholder={t('enterEmail')} />
              </div>
              <div className="form-group">
                <label htmlFor="password">{t('password')}</label>
                <input type="password" id="password" placeholder={t('createPassword')} />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">{t('confirmPassword')}</label>
                <input type="password" id="confirm-password" placeholder={t('confirmPassword')} />
              </div>
              <div className="terms-check">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">{t('agreeToTerms')} <a href="#terms">{t('termsAndConditions')}</a></label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                {t('createAccount')}
              </button>
            </form>
          )}
        </div>
        
        <div className="auth-modal-footer">
          <p>
            {isLogin 
              ? t('dontHaveAccount') 
              : t('alreadyHaveAccount')}
            <button className="toggle-auth" onClick={toggleMode}>
              {isLogin ? t('registerNow') : t('loginNow')}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
