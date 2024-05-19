// Carousel.jsx
import React from 'react';
import './Carousel.css';
import ImagePath from '../../Datas/Imagepath';

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img key={index} src={ImagePath[image]} alt={`Carousel ${index}`} />
      ))}
    </div>
  );
};

export default Carousel;
