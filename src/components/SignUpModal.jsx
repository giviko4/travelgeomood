import React, { useState } from 'react';
import Modal from 'react-modal';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from '../firebase';
import './SignInModal.css';

function SignUpModal({ isOpen, onRequestClose, onSwitchToSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(''); // შევცვალეთ name -> firstName
  const [lastName, setLastName] = useState('');   // დავამატეთ lastName

  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (!firstName || !lastName || !email || !password) { // შევამოწმოთ ყველა ველი
      setError('Please fill in all fields.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Firestore-ში ვინახავთ სახელსაც და გვარსაც
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        email: email,
      });

      alert('Registration successful!');
      onRequestClose();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
      <div className="modal-header">
        <h2>Sign Up</h2>
        <button onClick={onRequestClose} className="close-btn">&times;</button>
      </div>
      <form onSubmit={handleSignUp} className="modal-form">
        <div className="form-group">
          <label htmlFor="signup-firstname">First Name</label>
          <input type="text" id="signup-firstname" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="signup-lastname">Last Name</label>
          <input type="text" id="signup-lastname" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input type="email" id="signup-email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input type="password" id="signup-password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
      <div className="modal-footer">
        <p>Already have an account? <button type="button" onClick={onSwitchToSignIn} className="switch-btn">Sign In</button></p>
      </div>
    </Modal>
  );
}

export default SignUpModal;