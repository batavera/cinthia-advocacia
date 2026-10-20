import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-gold-500 selection:text-navy-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;