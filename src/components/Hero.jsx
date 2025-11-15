// src/components/Hero.jsx (განახლებული ლოგიკით)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- იმპორტი
import { useTranslation } from 'react-i18next';
import './Hero.css';
import { FaSearch } from 'react-icons/fa';
import HeroBg from '../assets/images/tbilisi-hero.jpg';

function Hero() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState(''); // <-- მდგომარეობა საძიებო ტექსტისთვის
  const navigate = useNavigate(); // <-- ნავიგაციისთვის

  // ფუნქცია, რომელიც ეშვება ძებნისას
  const handleSearch = (e) => {
    e.preventDefault(); // ხელს უშლის გვერდის გადატვირთვას
    if (searchQuery.trim()) {
      // გადავამისამართებთ მომხმარებელს ძებნის შედეგების გვერდზე
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        
        {/* onSubmit ეშვება Enter-ზე ან ღილაკზე დაჭერისას */}
        <form className="search-bar" onSubmit={handleSearch}>
          <FaSearch className="search-icon-desktop" />
          <input 
            type="text" 
            placeholder={t('search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          {/* ღილაკს დავამატეთ type="submit" */}
          <button type="submit">
            {/* ეს სპანი გამოჩნდება მხოლოდ დესკტოპზე */}
            <span className="search-button-text">Search</span>
            {/* ეს ხატულა გამოჩნდება მხოლოდ მობილურზე */}
            <FaSearch className="search-button-icon" />
          </button>
        </form>

      </div>
    </section>
  );
}

export default Hero;