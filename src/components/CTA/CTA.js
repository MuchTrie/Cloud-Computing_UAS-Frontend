import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              YOUR LEGACY
              <span className="gold"> AWAITS</span>
            </h2>
            
            <p className="cta-subtitle">
              The choice is simple. Remain where you are, or step into greatness. 
              Champions don't wait for tomorrow. They execute today.
            </p>
            
            <div className="cta-quote">
              <blockquote>
                "Every master was once a disaster. Every pro was once an amateur. 
                Every icon was once an unknown. But they all had one thing in common: 
                they started."
              </blockquote>
              <cite>- Coach Chad</cite>
            </div>
          </div>
          
          <div className="cta-actions">
            <div className="action-primary">
              <button className="btn btn-primary cta-btn-primary">
                EXECUTE NOW
              </button>
              <p className="action-note">Start your transformation today</p>
            </div>
            
            <div className="action-secondary">
              <button className="btn cta-btn-secondary">
                LEARN THE METHOD
              </button>
              <p className="action-note">Discover the Chad philosophy</p>
            </div>
          </div>
        </div>
        
        <div className="cta-stats">
          <div className="stat-item">
            <div className="stat-icon">💪</div>
            <div className="stat-info">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI GUIDANCE</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-number">∞</span>
              <span className="stat-label">POTENTIAL</span>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">👑</div>
            <div className="stat-info">
              <span className="stat-number">1</span>
              <span className="stat-label">LIFETIME</span>
            </div>
          </div>
        </div>
        
        <div className="final-message">
          <p className="message-text">
            The time for excuses is over. The time for action is now.
          </p>
          <div className="message-signature">
            - Coach Chad
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
