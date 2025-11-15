import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { destinations } from '../data/destinationsData';
import BookingModal from '../components/BookingModal';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './DestinationDetail.css';

function DestinationDetail() {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const { currentUser } = useAuth();
  const currentLang = i18n.language;
  
  const destination = destinations.find(dest => dest.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAuthRedirect = () => {
    alert("Please sign in using the button in the header to book a tour.");
  };

  if (!destination) { return <div className="container not-found"><h2>Destination not found!</h2></div>; }

  const gallerySliderSettings = { /* ... */ };
  const slides = destination.images.map(img => ({ src: img.src }));

  return (
    <>
      <div className="detail-container">
        <div className="detail-gallery-slider">
          {destination.images && destination.images.length > 0 && (
            <Slider {...gallerySliderSettings}>
              {destination.images.map((image, index) => (
                <div key={index} className="gallery-slide-wrapper" onClick={() => { setImageIndex(index); setLightboxOpen(true); }}>
                  <img src={image.src} alt={`${destination.name[currentLang] || destination.name.en} - ${image.name}`} className="gallery-slider-img"/>
                  <div className="image-caption">{image.name}</div>
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div className="detail-content">
          <h1>{destination.name[currentLang] || destination.name.en}</h1>
          <div className="detail-section prominent">
            <h3>{destination.duration ? (destination.duration[currentLang] || destination.duration.en) : ''}</h3>
          </div>
          <div className="detail-section">
            <h4>{destination.routeLabel ? (destination.routeLabel[currentLang] || destination.routeLabel.en) : 'Route'}</h4>
            <p>{destination.route ? (destination.route[currentLang] || destination.route.en) : 'Not specified'}</p>
          </div>
          <div className="detail-section">
            <h4>{t('tour_dates_label')}:</h4>
            <p>{t('any_day')}</p>
          </div>
          <div className="detail-section">
            <h4>{t('description_label')}:</h4>
            <p>{destination.description ? (destination.description[currentLang] || destination.description.en) : 'No description available.'}</p>
          </div>
        </div>
        
        <div className="booking-section">
          {currentUser ? (
            <button className="book-now-btn" onClick={() => setModalIsOpen(true)}>
              {t('book_now_btn')}
            </button>
          ) : (
            <p className="login-prompt">
              {t('login_to_book_prompt')}
            </p>
          )}
        </div>
        
        <Link to="/destinations" className="back-link">{t('back_to_destinations_link')}</Link>
      </div>
      
      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={slides} index={imageIndex}/>

      {currentUser && (
        <BookingModal 
          isOpen={modalIsOpen} 
          onRequestClose={() => setModalIsOpen(false)} 
          tour={destination} 
        />
      )}
    </>
  );
}
export default DestinationDetail;






