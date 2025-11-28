// src/pages/SpecialToursPage.jsx (ტექსტი დაბრუნებულია)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { specialTours } from '../data/specialToursData';
import DestinationCard from '../components/DestinationCard';
import './DestinationsPage.css'; // ისევ ვიყენებთ DestinationsPage-ის სტილს

function SpecialToursPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="special-tours-page">
      {/* --- დავაბრუნეთ Hero სექცია ტექსტებით --- */}
      <div className="destinations-hero"> {/* ვიყენებთ იგივე კლასს */}
        <h1>{t('special_tours_hero_title')}</h1>
        <p>{t('special_tours_hero_subtitle')}</p>
      </div>

      <div className="container">
        <div className="tours-grid"> 
          {specialTours.map(tour => (
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

export default SpecialToursPage;

