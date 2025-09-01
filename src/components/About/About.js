import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              MEET YOUR
              <span className="gold"> MENTOR</span>
            </h2>
            
            <div className="about-description">
              <p className="lead">
                Coach Chad is not your average fitness trainer. He is the embodiment of 
                discipline, strength, and unwavering focus. Every word carries weight. 
                Every instruction builds legends.
              </p>
              
              <div className="philosophy">
                <h3>THE PHILOSOPHY</h3>
                <blockquote>
                  "Excellence is not an act, but a habit. You don't rise to the level 
                  of your goals. You fall to the level of your systems."
                </blockquote>
              </div>
              
              <div className="principles">
                <div className="principle">
                  <div className="principle-number">01</div>
                  <div className="principle-content">
                    <h4>DISCIPLINE OVER MOTIVATION</h4>
                    <p>Motivation fades. Discipline endures. Build systems, not emotions.</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-number">02</div>
                  <div className="principle-content">
                    <h4>SILENCE OVER NOISE</h4>
                    <p>Let your results speak. Work in silence. Success will be loud enough.</p>
                  </div>
                </div>
                
                <div className="principle">
                  <div className="principle-number">03</div>
                  <div className="principle-content">
                    <h4>LEGACY OVER COMFORT</h4>
                    <p>Comfort is the enemy of greatness. Choose the path that builds legends.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="quote-card">
              <div className="quote-content">
                <span className="quote-mark">"</span>
                <p>Today, we build a legacy. No excuses. Execute.</p>
                <span className="quote-mark">"</span>
              </div>
              <div className="quote-author">- Coach Chad</div>
            </div>
            
            <div className="stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">TRANSFORMED</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">COMMITMENT</div>
              </div>
              <div className="stat">
                <div className="stat-number">∞</div>
                <div className="stat-label">POTENTIAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
