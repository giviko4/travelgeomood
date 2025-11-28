// src/components/DestinationCard.jsx (განახლებული თარგმანით)

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DestinationCard.css';

function DestinationCard({ image, name, price, id, route, isSpecial }) {
  const { t } = useTranslation();

  return (
    <Link to={`/destination/${id}`} className="card-link"> 
      <div className="destination-card">
        {/* --- შეცვლილია ეს ნაწილი --- */}
        {isSpecial && (
          <div className="special-tour-badge">{t('special_tour_badge')}</div>
        )}
        
        <img src={image} alt={name} className="card-img" />
        
        <div className="card-body-overlay">
          <div className="card-text-content">
            <h3>{name}</h3>
            {route && <p className="card-route">{route}</p>}
          </div>
          <p className="card-price">{t('price_from')} ${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;