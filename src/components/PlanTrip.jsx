import React from 'react';
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
        <button className="get-started-btn">{t('plan_trip_button')}</button>
      </div>
    </section>
  );
}

export default PlanTrip;