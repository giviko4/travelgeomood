// src/pages/GalleryPage.jsx (სრული და გასუფთავებული ვერსია)

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { galleryImages } from '../data/galleryData.js';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './GalleryPage.css';

function GalleryPage() {
  // t ფუნქცია აღარ გვჭირდება, რადგან სათაურები წავშალეთ, ამიტომ ვტოვებთ მხოლოდ i18n-ს
  const { i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Lightbox-ისთვის (სურათის გახსნისას) ვამზადებთ სლაიდების მასივს
  const slides = galleryImages.map(img => ({
    src: img.src,
    title: img.alt[i18n.language] || img.alt.en, // გახსნილ სურათს ექნება აღწერა
  }));

  const openLightbox = (index) => {
    setImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="gallery-page">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt[i18n.language] || image.alt.en} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* ეს კომპონენტი უზრუნველყოფს სურათის გახსნას ლამაზ მოდალურ ფანჯარაში */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={imageIndex}
      />
    </>
  );
}

export default GalleryPage;
