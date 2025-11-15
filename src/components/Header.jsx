import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';
import LanguageSwitcher from './LanguageSwitcher';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const { t } = useTranslation();
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // ... (useEffect და მოდალების ფუნქციები უცვლელია) ...
  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      getDoc(userDocRef).then(docSnap => {
        if (docSnap.exists()) { setUserName(docSnap.data().displayName); }
      });
    } else { setUserName(''); }
  }, [currentUser]);

  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const openSignInModal = () => setSignInModalIsOpen(true);
  const closeSignInModal = () => setSignInModalIsOpen(false);
  const openSignUpModal = () => setSignUpModalIsOpen(true);
  const closeSignUpModal = () => setSignUpModalIsOpen(false);
  const switchToSignUp = () => { closeSignInModal(); openSignUpModal(); };
  const switchToSignIn = () => { closeSignUpModal(); openSignInModal(); };
  const handleSignOut = () => { signOut(auth).catch((error) => console.error('Sign out error', error)); };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo" onClick={() => setIsNavOpen(false)}>
            travelgeomood
          </Link>
          
          <nav className={isNavOpen ? "header-nav active" : "header-nav"}>
            <ul onClick={() => setIsNavOpen(false)}>
              <li><NavLink to="/" className="nav-link">{t('nav_home')}</NavLink></li>
              <li><NavLink to="/about" className="nav-link">{t('nav_about')}</NavLink></li>
              <li><NavLink to="/destinations" className="nav-link">{t('nav_destinations')}</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">{t('nav_contact')}</NavLink></li>
            </ul>
          </nav>
          
          {/* --- მთავარი ცვლილება: .mobile-menu-icon-wrapper --- */}
          <div className="header-right-side">
            <LanguageSwitcher />
            {currentUser ? (
              <div className="user-profile">
                <Link to="/profile" className="profile-link">
                  <div className="profile-avatar-icon">
                    {userName ? userName.charAt(0).toUpperCase() : (currentUser.email ? currentUser.email.charAt(0).toUpperCase() : 'U')}
                  </div>
                </Link>
                <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
              </div>
            ) : (
              <button className="sign-in-btn" onClick={openSignInModal}>Sign in</button>
            )}
          </div>
          
          <div className="mobile-menu-icon" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </div>
          {/* -------------------------------------------------- */}
        </div>
      </header>
      {!currentUser && (
        <>
          <SignInModal isOpen={signInModalIsOpen} onRequestClose={closeSignInModal} onSwitchToSignUp={switchToSignUp} />
          <SignUpModal isOpen={signUpModalIsOpen} onRequestClose={closeSignUpModal} onSwitchToSignIn={switchToSignIn} />
        </>
      )}
    </>
  );
}
export default Header;