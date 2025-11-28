// src/components/FloatingTelegramButton.jsx (თარგმანით)

import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. დავამატეთ იმპორტი
import { FaTelegramPlane } from 'react-icons/fa';
import './FloatingTelegramButton.css';

function FloatingTelegramButton() {
  const { t } = useTranslation(); // 2. გამოვიძახეთ hook-ი

  return (
    <a
      href="https://t.me/+62OC7rWxfyEzMWQy"
      className="floating-telegram-container"
      target="_blank"
      rel="noopener noreferrer"
      title="Contact us on Telegram"
    >
      <div className="telegram-icon-wrapper">
        <FaTelegramPlane />
      </div>
      {/* 3. სტატიკური ტექსტი შევცვალეთ t() ფუნქციით */}
      <span className="telegram-text">{t('telegram_message_us')}</span>
    </a>
  );
}

export default FloatingTelegramButton;