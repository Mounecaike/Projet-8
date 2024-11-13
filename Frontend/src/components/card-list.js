import React, { useEffect, useState } from 'react';
import '../Assets/Card/card.css';
import { fetchProperties } from '../services';
import Card from './card';

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
  