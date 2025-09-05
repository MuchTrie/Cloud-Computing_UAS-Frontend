import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import About from './components/About/About';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
// Perbaikan path: file berada dalam subfolder admin/ dan user/
import AdminDashboard from './components/Dashboard/admin/AdminDashboard';
import UserDashboard from './components/Dashboard/user/UserDashboard';
import './App.css';

// Komponen HomePage yang berisi konten halaman utama
const HomePage = () => {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
