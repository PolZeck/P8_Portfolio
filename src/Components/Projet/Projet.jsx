import React from 'react';
import './Styles.css';

const Projet = ({ project, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(project)}>
      <div className="card-image" style={{ backgroundImage: `url(${project.imageUrl})` }}>
        <h3 className='card-title'>{project.title}</h3>
      </div>
      <div className="card-content">
        <div className="card-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projet;
