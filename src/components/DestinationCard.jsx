import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './DestinationCard.css';

function DestinationCard({ image, name, price, id, route, routeLabel }) {
  const { t } = useTranslation();

  return (
    <Link to={`/destination/${id}`} className="card-link"> 
      <div className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-body">
          <h3>{name}</h3>
          {route && routeLabel && (
            <p className="card-route">
              <strong>{routeLabel}:</strong> {route}
            </p>
          )}
          <p className="card-price">{t('price_from')} ${price}</p>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;