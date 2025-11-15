// src/components/DestinationCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DestinationCard.css'; // ამ ფაილის სტილებს სრულად შევცვლით

function DestinationCard({ image, name, price, id, route, routeLabel }) {
  const { t } = useTranslation();

  return (
    // card-link კლასი უზრუნველყოფს, რომ მთელი ბარათი იყოს კლიკვადი
    <Link to={`/destination/${id}`} className="card-link"> 
      <div className="destination-card">
        <img src={image} alt={name} className="card-img" />
        
        {/* ეს არის "overlay" ელემენტი, რომელიც შეიცავს ტექსტს */}
        <div className="card-body-overlay">
          <div className="card-text-content">
            <h3>{name}</h3>
            {route && routeLabel && (
              <p className="card-route">
                {route}
              </p>
            )}
          </div>
          <p className="card-price">{t('price_from')} ${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;