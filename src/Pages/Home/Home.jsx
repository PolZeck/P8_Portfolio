// Home.jsx
import React, { useState, useEffect } from 'react';
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

  // Empêche le défilement de la page lorsqu'une modale est ouverte
  useEffect(() => {
    const handleScroll = (e) => {
      if (document.body.classList.contains('modal-open')) {
        e.preventDefault();
      }
    };

    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Portfolio</h1>
      <div className="project-list">
        <h2>Projets</h2>
        <div className="cards-container">
          {portfolioData.map((project, index) => (
            <div key={index} className="card" onClick={() => openModal(project)}>
              <img src={project.imageUrl} alt={project.title} className="card-image" />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Compétences : {project.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modale pour afficher les détails du projet */}
      {selectedProject && (
        <>
          <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
              <span className="close-btn" onClick={closeModal}>×</span>
              <div className="modal-content">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>
                <p>Compétences : {selectedProject.skills.join(', ')}</p>
                {/* Ajoutez d'autres informations sur le projet ici */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
