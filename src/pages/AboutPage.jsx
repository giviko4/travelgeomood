// src/pages/AboutPage.jsx (ტექსტი დაბრუნებულია)

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaUserFriends, FaMapSigns } from 'react-icons/fa';
import './AboutPage.css';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* --- დავაბრუნეთ Hero სექცია ტექსტებით --- */}
      <div className="about-hero">
        <div className="container">
          <h1>{t('about_hero_title')}</h1>
          <p>{t('about_hero_subtitle')}</p>
        </div>
      </div>

      <section className="story-section">
        <div className="container story-section-grid">
          {/* ... დანარჩენი კოდი უცვლელია ... */}
          <div className="story-intro">
            <h2>{t('about_meet_team')}</h2>
            <p>{t('about_hero_subtitle')}</p>
          </div>
          <div className="story-details">
            <p>{t('about_story')}</p>
          </div>
        </div>
      </section>
      
      {/* ... დანარჩენი გვერდი უცვლელია ... */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about_why_us')}</h2>
          </div>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon"><FaHeart /></div>
              <h3>{t('about_passion_title')}</h3>
              <p>{t('about_passion_text')}</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon"><FaUserFriends /></div>
              <h3>{t('about_small_groups_title')}</h3>
              <p>{t('about_small_groups_text')}</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon"><FaMapSigns /></div>
              <h3>{t('about_authentic_title')}</h3>
              <p>{t('about_authentic_text')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('about_reviews_title')}</h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <p className="review-text">"{t('about_review_1_text')}"</p>
              <footer className="review-author">{t('about_review_1_author')}</footer>
            </div>
            <div className="review-card">
              <p className="review-text">"{t('about_review_2_text')}"</p>
              <footer className="review-author">{t('about_review_2_author')}</footer>
            </div>
            <div className="review-card">
              <p className="review-text">"{t('about_review_3_text')}"</p>
              <footer className="review-author">{t('about_review_3_author')}</footer>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{t('about_cta_title')}</h2>
          <p>{t('about_cta_subtitle')}</p>
          <div className="cta-buttons">
            <Link to="/destinations" className="cta-btn primary">{t('about_cta_btn_tours')}</Link>
            <Link to="/contact" className="cta-btn secondary">{t('about_cta_btn_contact')}</Link>
          </div>
        </div>
      </section>
    </div>
  );



  
}

export default AboutPage;