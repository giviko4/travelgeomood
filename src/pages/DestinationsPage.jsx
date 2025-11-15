// src/pages/DestinationsPage.jsx (განახლებული)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { destinations } from '../data/destinationsData';
import DestinationCard from '../components/DestinationCard'; // <-- მთავარი ცვლილება: ვიმპორტებთ ახალ ბარათს
import './DestinationsPage.css';

// ძველი TourCard კომპონენტი აქედან სრულად წაიშალა

function DestinationsPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="destinations-page">
      <div className="destinations-hero">
        <h1>{t('destinations_hero_title')}</h1>
        <p>{t('destinations_hero_subtitle')}</p>
      </div>
      <div className="container">
        <div className="tours-grid">
          {destinations.map(tour => (
            // ვიყენებთ ახალ DestinationCard კომპონენტს
            <DestinationCard 
              key={tour.id}
              id={tour.id}
              image={tour.images[0].src}
              name={tour.name[i18n.language] || tour.name.en}
              price={tour.price}
              route={tour.route ? (tour.route[i18n.language] || tour.route.en) : ''}
              routeLabel={tour.routeLabel ? (tour.routeLabel[i18n.language] || tour.routeLabel.en) : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;
