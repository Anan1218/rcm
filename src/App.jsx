import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProvenResults from './components/ProvenResults';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import CustomerLogos from './components/CustomerLogos';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      <Hero />
      <ProvenResults />
      <CustomerLogos />
      <Features />
      <Testimonials />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;