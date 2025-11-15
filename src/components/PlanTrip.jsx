// src/components/PlanTrip.jsx (განახლებული)

import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. ვიმპორტებთ Link კომპონენტს
import { useTranslation } from 'react-i18next';
import './PlanTrip.css';

function PlanTrip() {
  const { t } = useTranslation();

  return (
    <section className="plan-trip">
      <div className="container plan-trip-container">
        <div>
          <h2>{t('plan_trip_title')}</h2>
          <p>{t('plan_trip_subtitle')}</p>
        </div>
        {/* 2. <button>-ს ვცვლით <Link>-ით, რომელიც მიემართება "/destinations" გვერდზე */}
        <Link to="/destinations" className="get-started-btn">
          {t('plan_trip_button')}
        </Link>
      </div>
    </section>
  );
}

export default PlanTrip;
