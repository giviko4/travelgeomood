// src/pages/DestinationsPage.jsx (ტექსტი დაბრუნებულია)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { destinations } from '../data/destinationsData';
import DestinationCard from '../components/DestinationCard';
import './DestinationsPage.css';

function DestinationsPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="destinations-page">
      {/* --- დავაბრუნეთ Hero სექცია ტექსტებით --- */}
      <div className="destinations-hero">
        <h1>{t('destinations_hero_title')}</h1>
        <p>{t('destinations_hero_subtitle')}</p>
      </div>

      <div className="container">
        <div className="tours-grid">
          {destinations.map(tour => (
            <DestinationCard 
              key={tour.id}
              id={tour.id}
              image={tour.images[0].src}
              name={tour.name[i18n.language] || tour.name.en}
              price={tour.price}
              route={tour.route ? (tour.route[i18n.language] || tour.route.en) : ''}
              isSpecial={tour.isSpecial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;