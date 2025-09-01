import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'INSTANT PRECISION',
      description: 'No wasted time. No unnecessary words. Every instruction is calculated for maximum impact.',
      details: ['AI-powered workout optimization', 'Real-time form corrections', 'Adaptive intensity scaling']
    },
    {
      icon: '🎯',
      title: 'LASER FOCUS',
      description: 'Cut through the noise. Focus on what matters. Build habits that build legends.',
      details: ['Goal-oriented programming', 'Distraction elimination protocols', 'Mental discipline training']
    },
    {
      icon: '💀',
      title: 'ZERO COMPROMISE',
      description: 'No excuses. No shortcuts. Only the path to greatness. Accept nothing less than excellence.',
      details: ['Progressive overload systems', 'Accountability frameworks', 'Performance tracking']
    },
    {
      icon: '👑',
      title: 'LEGACY BUILDING',
      description: 'Every rep builds your empire. Every session writes your story. Become the legend you were meant to be.',
      details: ['Long-term transformation', 'Character development', 'Sustainable excellence']
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">
            THE CHAD
            <span className="gold"> METHOD</span>
          </h2>
          <p className="section-subtitle text-center">
            Four pillars of transformation. No compromise. No excuses.
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
            <h3>READY TO BEGIN?</h3>
            <p>The path to greatness starts with a single step. Take it now.</p>
            <button className="btn btn-primary">START YOUR TRANSFORMATION</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
