import React from 'react';
import Slider from 'react-slick';
import DestinationCard from './DestinationCard';
import './FeaturedDestinations.css';
import { destinations } from '../data/destinationsData';
import { useTranslation } from 'react-i18next';
import useWindowSize from '../hooks/useWindowSize';

const featuredTours = destinations.slice(0, 8);
const topTours = destinations.slice(0, 4);
const newTours = destinations.slice(4, 8);

function FeaturedDestinations() {
  const { t, i18n } = useTranslation();
  const isMobile = useWindowSize();

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3, infinite: true } },
      { breakpoint: 1024, settings: { slidesToShow: 2, infinite: true } },
    ]
  };

  return (
    <section className="featured-destinations-full-width">
      <div className="container">
        <h2>{t('featured_destinations')}</h2>
      </div>

      {isMobile ? (
        // --- მობილურის ვერსია: ერთი სვეტი ---
        <div className="container">
          <div className="mobile-tours-grid">
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
      ) : (
        // --- დესკტოპის ვერსია: სლაიდერი + ბადე ---
        <>
          <div className="slider-full-width-container">
            <Slider {...sliderSettings}>
              {topTours.map((dest) => (
                <div key={dest.id}>
                  <DestinationCard 
                    id={dest.id}
                    image={dest.images[0].src}
                    name={dest.name[i18n.language] || dest.name.en} 
                    price={dest.price}
                    route={dest.route ? (dest.route[i18n.language] || dest.route.en) : ''}
                    routeLabel={dest.routeLabel ? (dest.routeLabel[i18n.language] || dest.routeLabel.en) : ''}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="new-tours-section">
            <div className="container">
              <div className="new-tours-grid">
                {newTours.map((dest) => (
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
          </div>
        </>
      )}
    </section>
  );
}

export default FeaturedDestinations;