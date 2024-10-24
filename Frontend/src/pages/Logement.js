/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/carousel';
import '../Assets/logement/logement.css';
import Tag from '../components/tag'
import StarRating from '../components/rating';


const Logement = () => {
  const { id } = useParams();
  const [logementData, setLocationData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/properties/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
          return response.json();
        })
        .then((data) => {
          setLocationData(data);
        })
        .catch((error) => console.error('Erreur lors du chargement des données:', error));
    }
  }, [id]);
  
  if (!logementData) {
    return <div>Chargement...</div>; 
  }

  return (
    <div>
      <main>
          <Carousel images={logementData.pictures} />
          <div className="logement-details">
            <h1 className="logement-title">{logementData.title}</h1>
            <p className="logement-location">{logementData.location}</p>
            <Tag tags={logementData.tags} />
            <p className="logement-description">{logementData.description}</p>
            <StarRating rating={logementData.rating} />
            <div className="logement-host">
            <p className="host-name">
              {logementData.host.name.split(' ')[0]}<br />
              {logementData.host.name.split(' ')[1]}
            </p>
            <img src={logementData.host.picture} alt={`Photo de ${logementData.host.name}`} />
            </div>
            <h3>Équipements :</h3>
            <ul>
              {logementData.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
      </main>
    </div>
  );
};

export default Logement;