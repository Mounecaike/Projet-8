/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Assets/carousel/carousel.css';
import LeftArrow from '../Assets/carousel/arrowleft.png';
import RightArrow from '../Assets/carousel/arrowright.png';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrevious}>
        <img src={LeftArrow} alt="Flèche gauche" className="arrow-image" />
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
      />
      <button className="carousel-button next" onClick={handleNext}>
        <img src={RightArrow} alt="Flèche droite" className="arrow-image" />
      </button>
    </div>
  );
};

export default Carousel;
