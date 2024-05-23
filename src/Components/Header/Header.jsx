import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">Portfolio</h1>
        <h2 className="subtitle">Paul Ledieu</h2>
        <p className="description">
          Développeur web Junior spécialisé en JavaScript (React JS et Node JS)
        </p>
      </div>
    </header>
  );
};

export default Header;
