import React from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PlanTrip from '../components/PlanTrip';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <PlanTrip />
    </>
  );
}

export default HomePage;