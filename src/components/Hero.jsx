import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import { FaSearch } from 'react-icons/fa';
import HeroBg from '../assets/images/tbilisi-hero.jpg';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder={t('search_placeholder')} />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;