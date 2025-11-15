import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from '../context/AuthContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import './SignInModal.css'; // ვიყენებთ იგივე სტილებს

function BookingModal({ isOpen, onRequestClose, tour }) {
  const { currentUser } = useAuth();
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [bookingDate, setBookingDate] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!bookingDate) {
      setMessage({ type: 'error', text: 'Please select a date.' });
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        tourId: tour.id,
        tourName: tour.name.en, // ვინახავთ ინგლისურ სახელს
        userId: currentUser.uid,
        userEmail: currentUser.email,
        numberOfPeople: parseInt(numberOfPeople),
        bookingDate: bookingDate,
        createdAt: serverTimestamp(),
        status: 'pending' // ჯავშნის სტატუსი
      });

      setMessage({ type: 'success', text: 'Booking successful! We will contact you shortly.' });
      setTimeout(() => {
        onRequestClose();
        setMessage({ type: '', text: '' });
      }, 3000);

    } catch (error) {
      setMessage({ type: 'error', text: 'Booking failed. Please try again.' });
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal-content" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
      <div className="modal-header">
        <h2>Book: {tour.name.en}</h2>
        <button onClick={onRequestClose} className="close-btn">&times;</button>
      </div>
      <form onSubmit={handleBooking} className="modal-form">
        <div className="form-group">
          <label htmlFor="people">Number of People</label>
          <input 
            type="number" 
            id="people" 
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input 
            type="date" 
            id="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
          />
        </div>
        {message.text && <p className={`${message.type}-message`}>{message.text}</p>}
        <button type="submit" className="submit-btn">Confirm Booking</button>
      </form>
    </Modal>
  );
}

export default BookingModal;