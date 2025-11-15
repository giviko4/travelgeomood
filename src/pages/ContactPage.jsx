// src/pages/ContactPage.jsx (გაერთიანებული ვერსია)

import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaYoutube, FaVk, 
  FaWhatsapp, FaTelegramPlane, FaFacebookF, FaInstagram 
} from 'react-icons/fa';
import './ContactPage.css'; // ამ ფაილის სტილებსაც შევცვლით

function ContactPage() {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      <div className="container">
        {/* ერთიანი, ცენტრში მოთავსებული ბარათი */}
        <div className="contact-card">
          
          {/* --- ნაწილი 1: ძირითადი ინფორმაცია --- */}
          <div className="contact-main-content">
            <div className="contact-header">
              <h2>{t('contact_title')}</h2>
              <p>Got a question, comment, or suggestion? We'd love to hear from you!</p>
            </div>
            
            <div className="contact-info-wrapper">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <p>{t('contact_location_city')}, {t('contact_location_country')}</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <a href="mailto:bestmoodmaker@gmail.com">bestmoodmaker@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div className="contact-text">
                  <span>Irakli:</span>
                  <a href="tel:+995574999309">+995 574 999 309</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div className="contact-text">
                  <span>Salome:</span>
                  <a href="tel:+995599656068">+995 599 656 068</a>
                </div>
              </div>
            </div>
          </div>

          {/* --- ნაწილი 2: სოციალური ქსელები --- */}
          <div className="contact-socials-section">
            <h3>{t('contact_follow_us')}</h3>
            <div className="social-links">
              <a href="https://www.youtube.com/@moodmakerirakli" target="_blank" rel="noopener noreferrer" className="social-icon youtube"><FaYoutube /></a>
              <a href="https://vk.com/id516734523" target="_blank" rel="noopener noreferrer" className="social-icon vk"><FaVk /></a>
              <a href="https://chat.whatsapp.com/CIsYFxHNbAmKI00R1qw9Ue" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><FaWhatsapp /></a>
              <a href="https://t.me/+62OC7rWxfyEzMWQy" target="_blank" rel="noopener noreferrer" className="social-icon telegram"><FaTelegramPlane /></a>
              <a href="https://www.facebook.com/MoodMaker.ge?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/mood_maker_in_georgia/profilecard/?igsh=Z2hrNWU3MHg5cXEw" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactPage;