// src/components/Hero.jsx (განახლებული ვიდეოსთვის)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import { FaSearch } from 'react-icons/fa';

// 1. ვიდეოს და სურათის იმპორტი
import HeroVideo from '../assets/videos/hero-background.mp4';
import HeroFallbackImage from '../assets/images/tbilisi-hero.jpg';

function Hero() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  // Scrolled ეფექტის ლოგიკა უცვლელი რჩება
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('scrolled');
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <section className="hero">
      {/* 2. აქ ვცვლით div-ს video თეგით */}
      <video 
        className="hero-video-background" 
        src={HeroVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        poster={HeroFallbackImage} // ეს სურათი გამოჩნდება, სანამ ვიდეო ჩაიტვირთება
      >
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        
        <form className="search-bar" onSubmit={handleSearch}>
          <FaSearch className="search-icon-desktop" />
          <input 
            type="text" 
            placeholder={t('search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button type="submit">
            <span className="search-button-text">Search</span>
            <FaSearch className="search-button-icon" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;