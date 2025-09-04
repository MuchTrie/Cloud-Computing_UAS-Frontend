import React from 'react';
import { LanguageProvider } from '../../contexts/LanguageContext';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import About from '../About/About';
import CTA from '../CTA/CTA';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <LanguageProvider>
      <div className="App">
        {/* Floating 3D background elements */}
        <div className="floating-3d-element"></div>
        <div className="floating-3d-element"></div>
        <div className="floating-3d-element"></div>
        <div className="floating-3d-element"></div>
        
        <Header />
        <Hero />
        <About />
        <Features />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Home;
