// Modal.jsx

import React from 'react';
import './modalStyles.css';
import Carousel from '../Caroussel/Carousel';

const Modal = ({ project, onClose }) => {
  const handleContentClick = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement de clic
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={handleContentClick}>
        <span className="close-btn" onClick={onClose}>×</span>
        <div className="modal-content">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <Carousel images={project.carouselImages} />
          <div className="modal-skills">
            {project.skills.map((skill, index) => (
              <span className="modal-skill" key={index}>{skill}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-button">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
