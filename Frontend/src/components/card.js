import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Card/card.css';

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} className="card-image" />
        <div className="card-text">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
