// src/components/FeaturedDestinations.jsx

import React from 'react';
import DestinationCard from './DestinationCard';
import './FeaturedDestinations.css'; // ამ ფაილის სტილებსაც სრულად შევცვლით
import { destinations } from '../data/destinationsData';
import { useTranslation } from 'react-i18next';

// ვიღებთ პირველ 8 გამორჩეულ ტურს
const featuredTours = destinations.slice(0, 8);

function FeaturedDestinations() {
  const { t, i18n } = useTranslation();

  return (
    <section className="featured-destinations-section">
      <div className="container">
        <div className="section-header">
          <h2>{t('featured_destinations')}</h2>
        </div>
        
        <div className="featured-tours-grid">
          {featuredTours.map((dest) => (
            <DestinationCard 
              key={dest.id}
              id={dest.id}
              image={dest.images[0].src}
              name={dest.name[i18n.language] || dest.name.en} 
              price={dest.price}
              route={dest.route ? (dest.route[i18n.language] || dest.route.en) : ''}
              routeLabel={dest.routeLabel ? (dest.routeLabel[i18n.language] || dest.routeLabel.en) : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;
