import React from 'react';
import { Link } from 'react-router-dom';
import './TourCard.css';

function TourCard({ tour }) {
  return (
    <Link to={`/destination/${tour.id}`} className="tour-card-link">
      <div className="tour-card">
        <img src={tour.images[0].src} alt={tour.name} className="tour-card-img" />
        <div className="tour-card-body">
          <h3 className="tour-card-name">{tour.name}</h3>
          <div className="tour-card-footer">
            <span className="tour-card-duration">{tour.duration || ''}</span>
            <span className="tour-card-price">From ${tour.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TourCard;