// src/components/TestimonialsSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

function TestimonialsSection() {
  const { t } = useTranslation();

  const reviews = [
    {
      text: t('about_review_1_text'),
      author: t('about_review_1_author'),
    },
    {
      text: t('about_review_2_text'),
      author: t('about_review_2_author'),
    },
    {
      text: t('about_review_3_text'),
      author: t('about_review_3_author'),
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>{t('homepage_reviews_title')}</h2>
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{review.text}"</p>
              <footer className="testimonial-author">{review.author}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;