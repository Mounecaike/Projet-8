import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Card/card.css';

// Composant pour une seule card
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

// Composant pour afficher toutes les cards
function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Erreur lors de la récupération des données', error));
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
