// src/App.jsx (განახლებული)

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// კომპონენტები და გვერდები
import Header from './components/Header';
import FloatingTelegramButton from './components/FloatingTelegramButton'; // <-- 1. დაამატეთ იმპორტი
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';
import SpecialToursPage from './pages/SpecialToursPage';
import GalleryPage from './pages/GalleryPage';

// სტილები
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/special-tours" element={<SpecialToursPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      
      {/* --- 2. დაამატეთ კომპონენტი აქ --- */}
      <FloatingTelegramButton />

    </AuthProvider>
  );
}
export default App;