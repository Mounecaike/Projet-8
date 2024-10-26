/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/carousel';
import '../Assets/location/location.css';
import Tag from '../components/tag';
import StarRating from '../components/rating';
import { fetchPropertyById } from '../services';
import Collapse from '../components/collapse';

const Location = () => {
  const { id } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      if (id.trim() === '') {
        setError(true);
        return;
      }

      fetchPropertyById(id)
        .then((data) => {
          console.log('Données récupérées :', data);
          if (!data) {
            setError(true);
          } else {
            setLocationData(data);
          }
        })
        .catch((error) => {
          console.error('Erreur lors du chargement des données:', error);
          setError(true);
        });
    }
  }, [id]);

  if (error) {
    return <Navigate to="/error" />;
  }

  if (!locationData) {
    return <div>Chargement...</div>;
  }

  return (
    <main>
      <Carousel images={locationData.pictures} />
      <section className="location-details">
          <h1 className="location-title">{locationData.title}</h1>
          <p className="location-location">{locationData.location}</p>
          <div className='host-rating'>
            <div className="location-host">
              <p className="host-name">
                {locationData.host.name.split(' ')[0]}<br />
                {locationData.host.name.split(' ')[1]}
              </p>
              <img src={locationData.host.picture} alt={`Photo de ${locationData.host.name}`} />
            </div>
            <StarRating rating={locationData.rating} />
          </div>
          <Tag tags={locationData.tags} />
        <div className='collapse'>
          <Collapse title="Description" content={locationData.description} />
          <Collapse title="Équipement" content={locationData.equipments} />
        </div>
      </section>
    </main>
  );
};

export default Location;
