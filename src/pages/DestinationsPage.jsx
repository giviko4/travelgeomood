import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { destinations } from '../data/destinationsData';
import './DestinationsPage.css';

const TourCard = ({ tour }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  return (
    <Link to={`/destination/${tour.id}`} className="tour-card-link">
      <div className="tour-card">
        <img src={tour.images[0].src} alt={tour.name[currentLang] || tour.name.en} className="tour-card-img" />
        <div className="tour-card-body">
          <h3 className="tour-card-name">{tour.name[currentLang] || tour.name.en}</h3>
          <p className="tour-card-route">{tour.route ? (tour.route[currentLang] || tour.route.en) : ''}</p>
          <div className="tour-card-footer">
            <span className="tour-card-duration">{tour.duration ? (tour.duration[currentLang] || tour.duration.en) : ''}</span>
            <span className="tour-card-price">{t('price_from')} ${tour.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

function DestinationsPage() {
  const { t } = useTranslation();

  return (
    <div className="destinations-page">
      <div className="destinations-hero">
        <h1>{t('destinations_hero_title')}</h1>
        <p>{t('destinations_hero_subtitle')}</p>
      </div>
      <div className="container">
        <div className="tours-grid">
          {destinations.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DestinationsPage;