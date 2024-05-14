// Project.js
import React from 'react';

const Project = ({ project }) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Compétences : {project.skills.join(', ')}</p>
    </div>
  );
};

export default Project;
