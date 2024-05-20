import React, { useState } from 'react';
import ImagePath from '../../Datas/Imagepath.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importation des icônes de flèche
import './Carousel.css'; // Importation des styles CSS

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-navigation">
        <FaChevronLeft className="carousel-arrow left" onClick={previousImage} />
        <img src={ImagePath[images[currentImageIndex]]} alt={`Carousel ${currentImageIndex}`} className="carousel-image" />
        <FaChevronRight className="carousel-arrow right" onClick={nextImage} />
      </div>
    </div>
  );
};

export default Carousel;
