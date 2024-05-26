import React from 'react';
import contactData from '../../Datas/Contact.json';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contactez-moi</h1>
      <div className="contact-info">
        <p><strong>Email :</strong> <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
        <p><strong>Téléphone :</strong> <a href={`tel:${contactData.phone}`}>{contactData.phone}</a></p>
        <p><strong>Adresse :</strong> {contactData.address}</p>
      </div>
      <div className="social-media">
        <h2>Réseaux Sociaux</h2>
        <ul>
          <li><a href={contactData.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={contactData.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
