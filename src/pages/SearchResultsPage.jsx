// src/pages/SearchResultsPage.jsx (შესწორებული იმპორტით)

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { allTours } from '../data/allToursData.js'; // 1. ვიყენებთ ტურების ერთიან სიას (დამატებულია .js)
import DestinationCard from '../components/DestinationCard';
import './DestinationsPage.css';

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase().trim();
      
      const filtered = allTours.filter(tour => {
        const nameEN = tour.name.en?.toLowerCase() || '';
        const nameRU = tour.name.ru?.toLowerCase() || '';
        const routeEN = tour.route?.en?.toLowerCase() || '';
        const routeRU = tour.route?.ru?.toLowerCase() || '';
        const descriptionEN = tour.description.en?.toLowerCase() || '';
        const descriptionRU = tour.description.ru?.toLowerCase() || '';

        return (
          nameEN.includes(lowercasedQuery) ||
          nameRU.includes(lowercasedQuery) ||
          routeEN.includes(lowercasedQuery) ||
          routeRU.includes(lowercasedQuery) ||
          descriptionEN.includes(lowercasedQuery) ||
          descriptionRU.includes(lowercasedQuery)
        );
      });
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="destinations-page">
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Search Results for: "{query}"
        </h1>
        
        {searchResults.length > 0 ? (
          <div className="tours-grid">
            {searchResults.map(tour => (
              <DestinationCard 
                key={tour.id}
                id={tour.id}
                image={tour.images[0].src}
                name={tour.name[i18n.language] || tour.name.en}
                price={tour.price}
                route={tour.route ? (tour.route[i18n.language] || tour.route.en) : ''}
                isSpecial={tour.isSpecial}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>No tours found matching your search.</p>
            <Link to="/destinations" className="get-started-btn">View All Tours</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;