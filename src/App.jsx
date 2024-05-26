// App.jsx
import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil.jsx';
import Portfolio from './Pages/Portfolio/Portfolio.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
