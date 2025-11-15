import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinationsData';
import TourCard from '../components/TourCard'; // ვიყენებთ TourCard-ს, რომელსაც ახლავე შევქმნით
import './DestinationsPage.css'; // ვიყენებთ იგივე სტილებს

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(lowercasedQuery) ||
        dest.route?.toLowerCase().includes(lowercasedQuery) ||
        dest.description?.toLowerCase().includes(lowercasedQuery)
      );
      setSearchResults(filtered);
    }
  }, [query]);

  return (
    <div className="destinations-page">
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <h1 className="search-results-title">Search Results for: "{query}"</h1>
        
        {searchResults.length > 0 ? (
          <div className="tours-grid">
            {searchResults.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No tours found matching your search.</p>
            <Link to="/destinations" className="cta-btn primary">View All Tours</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;