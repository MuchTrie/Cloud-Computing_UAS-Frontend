import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">COACH CHAD</h3>
            <p className="footer-tagline">
              Build Your Legacy. Execute Excellence. Embrace Greatness.
            </p>
            
            <div className="footer-quote">
              <p>"Champions are made in silence. Legends speak through results."</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>TRAINING</h4>
              <ul>
                <li><a href="#strength">Strength Building</a></li>
                <li><a href="#discipline">Mental Discipline</a></li>
                <li><a href="#habits">Habit Formation</a></li>
                <li><a href="#nutrition">Nutrition Guidance</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>PHILOSOPHY</h4>
              <ul>
                <li><a href="#mindset">Alpha Mindset</a></li>
                <li><a href="#discipline">Discipline Over Motivation</a></li>
                <li><a href="#legacy">Legacy Building</a></li>
                <li><a href="#excellence">Excellence Standards</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>CONTACT</h4>
              <ul>
                <li><a href="#start">Start Training</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#community">Join Community</a></li>
                <li><a href="#feedback">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-principles">
            <div className="principle-item">
              <span className="principle-icon">💪</span>
              <span className="principle-text">STRENGTH</span>
            </div>
            <div className="principle-item">
              <span className="principle-icon">🎯</span>
              <span className="principle-text">FOCUS</span>
            </div>
            <div className="principle-item">
              <span className="principle-icon">👑</span>
              <span className="principle-text">LEGACY</span>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-final">
            <p className="copyright">
              © 2025 Coach Chad. Built for Champions. Designed for Legends.
            </p>
            
            <div className="footer-motto">
              <p>EXECUTE. EXCEL. ELEVATE.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
