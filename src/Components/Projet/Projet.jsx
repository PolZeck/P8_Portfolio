// Projet.jsx
import React from 'react';

const Projet = ({ project, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(project)}>
      <img src={project.imageUrl} alt={project.title} className="card-image" />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>Compétences : {project.skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default Projet;
