import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Founding from './components/Founding';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'founding':
        return <Founding />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;