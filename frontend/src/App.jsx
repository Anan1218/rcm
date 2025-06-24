import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProvenResults from './components/ProvenResults';
// import Testimonials from './components/Testimonials';
import Features from './components/Features';
// import CustomerLogos from './components/CustomerLogos';
import SwitchingProcess from './components/SwitchingProcess';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-900 overflow-x-hidden">
      <Header />
      <Hero />
      <ProvenResults />
      {/* <CustomerLogos /> */}
      <Features />
      <SwitchingProcess />
      {/* <Testimonials /> */}
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;