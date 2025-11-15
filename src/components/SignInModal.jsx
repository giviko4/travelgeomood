import React, { useState } from 'react';
import Modal from 'react-modal';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"; // <-- დაემატა reset ფუნქცია
import { auth } from '../firebase';
import './SignInModal.css';

function SignInModal({ isOpen, onRequestClose, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState(''); // შეტყობინებისთვის

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    signInWithEmailAndPassword(auth, email, password)
      .then(() => onRequestClose())
      .catch(() => setError("Failed to sign in. Please check your email and password."));
  };

  const handlePasswordReset = () => {
    setError('');
    setMessage('');
    if (!email) {
      setError("Please enter your email to reset the password.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent. Please check your inbox.");
      })
      .catch(() => {
        setError("Failed to send reset email. Please check the address.");
      });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
      <div className="modal-header">
        <h2>Sign In</h2>
        <button onClick={onRequestClose} className="close-btn">&times;</button>
      </div>
      <form onSubmit={handleSignIn} className="modal-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        </div>
        
        {/* --- დამატებული ლინკი და შეტყობინებები --- */}
        <div className="form-actions">
          <button type="button" onClick={handlePasswordReset} className="forgot-password-btn">Forgot Password?</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        {/* ------------------------------------------- */}
        
        <button type="submit" className="submit-btn">Sign In</button>
      </form>
      <div className="modal-footer">
        <p>Don't have an account? <button type="button" onClick={onSwitchToSignUp} className="switch-btn">Sign Up</button></p>
      </div>
    </Modal>
  );
}

export default SignInModal;