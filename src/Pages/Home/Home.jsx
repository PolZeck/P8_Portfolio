// Home.jsx
import React, { useState } from 'react';
import Projet from '../../Components/Projet/Projet.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import portfolioData from '../../Datas/PortfolioData.json';
import './styles.css';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null); // État pour gérer le projet sélectionné

  // Fonction pour ouvrir la modale et définir le projet sélectionné
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open'); // Ajoute la classe modal-open au corps
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open'); // Supprime la classe modal-open du corps
  };

  // Ferme la modale lorsqu'on clique à l'extérieur de celle-ci
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Portfolio</h1>
      <div className="project-list">
        <h2>Projets</h2>
        <div className="cards-container">
          {portfolioData.map((project, index) => (
            <Projet key={index} project={project} onClick={openModal} />
          ))}
        </div>
      </div>
      {/* Modale pour afficher les détails du projet */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
