import React from 'react';
import '../Assets/rating/star-rating.css';

const StarRating = ({ rating, maxStars = 5 }) => {
  const filledStars = Math.round(rating); 
  const emptyStars = maxStars - filledStars;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={`filled-${index}`} className="star filled">&#9733;</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`} className="star empty">&#9733;</span>
      ))}
    </div>
  );
};

export default StarRating;
