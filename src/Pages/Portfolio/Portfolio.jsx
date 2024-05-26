import React, { useState } from 'react';
import Projet from '../../Components/Projet/Projet.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import portfolioData from '../../Datas/PortfolioData.json';
import imagePaths from '../../Datas/Imagepath.js';
import './styles.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="container">
      <h1 className="heading">Portfolio</h1>
      <div className="project-list">
        <h2>Projets</h2>
        <div className="cards-container">
          {portfolioData.map((project, index) => (
            <Projet 
              key={index} 
              project={{ ...project, imageUrl: imagePaths[project.imageKey] }} 
              onClick={() => openModal(project)} 
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal project={{ ...selectedProject, imageUrl: imagePaths[selectedProject.imageKey] }} onClose={closeModal} />
      )}
    </div>
  );
};

export default Portfolio;
