// CardList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Card/card.css';
import { fetchProperties } from '../services';
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

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchProperties()
      .then((data) => setCards(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card 
          key={card.id} 
          id={card.id} 
          title={card.title} 
          cover={card.cover} 
        />
      ))}
    </div>
  );
}

export default CardList;
