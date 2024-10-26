/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../Assets/carousel/carousel.css';
import Leftarrow from '../Assets/carousel/arrowleft.png';
import Rightarrow from '../Assets/carousel/arrowright.png';

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

  const Singlepicture = images.length === 1;

  return (
    <div className="carousel">
        {!Singlepicture && (
        <button className="carousel-button prev" onClick={handlePrevious}>
          <img src={Leftarrow} alt="Précédent" />
        </button>
        )}
        <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
        />
        {!Singlepicture && (
        <button className="carousel-button next" onClick={handleNext}>
          <img src={Rightarrow} alt="Suivant" />
        </button>
        )}
        {!Singlepicture && (
        <div className="image-counter">
        {currentImageIndex + 1} / {images.length}
        </div>
        )}
    </div>
  );
};

export default Carousel;


