import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Features />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
