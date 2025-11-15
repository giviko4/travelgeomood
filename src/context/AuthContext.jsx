import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

// 1. კონტექსტის შექმნა
const AuthContext = createContext();

// 2. Provider კომპონენტის შექმნა
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ეს ფუნქცია ავტომატურად ეშვება, როცა მომხმარებელი შედის ან გამოდის
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // კომპონენტის გაქრობისას listener-ის გათიშვა
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  // 3. Provider აწვდის currentUser-ს ყველა შვილობილ კომპონენტს
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 4. Custom Hook, რომ მარტივად გამოვიყენოთ კონტექსტი
export function useAuth() {
  return useContext(AuthContext);
}