// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // ვთქვათ, HomePage გაქვს ცალკე
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage'; // <-- იმპორტი
import './App.css';

function App() {
  return (
    <AuthProvider>
      <title>Travel Georgia - Mood Maker</title>
      <meta name="description" content="..." />
      
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* <-- მარშრუტი */}
        </Routes>
      </main>
    </AuthProvider>
  );
}
export default App;