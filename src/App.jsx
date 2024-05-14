// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Pages/Home/Home.jsx';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail.jsx';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;