import React from 'react';
import '../Assets/Banner/banner.css'; 

function Banner({ imageSrc, altText }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt={altText} className="banner-image" />
    </div>
  );
}

export default Banner;
