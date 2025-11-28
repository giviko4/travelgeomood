import React from 'react';
import DestinationCard from './DestinationCard';
import './FeaturedDestinations.css';
import { destinations } from '../data/destinationsData';
import { useTranslation } from 'react-i18next';

// ვიღებთ პირველ 8 ტურს (სპეციალური ტურები უკვე თავშია)
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
              // --- მთავარი ცვლილება ---
              isSpecial={dest.isSpecial} // <-- ეს ხაზი იყო გამოტოვებული
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDestinations;