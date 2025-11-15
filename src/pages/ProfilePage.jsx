import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { doc, getDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { updatePassword } from "firebase/auth";
import { db, auth } from '../firebase';
import './ProfilePage.css';

function ProfilePage() {
  const { currentUser } = useAuth();
  const { t } = useTranslation();
  
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [originalFirstName, setOriginalFirstName] = useState('');
  const [originalLastName, setOriginalLastName] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [profileMessage, setProfileMessage] = useState({ type: '', text: '' });
  const [passwordMessage, setPasswordMessage] = useState({ type: '', text: '' });
  
  const [bookings, setBookings] = useState([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(true);

  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      getDoc(userDocRef).then(docSnap => {
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setFirstName(userData.firstName || '');
          setLastName(userData.lastName || '');
          setOriginalFirstName(userData.firstName || '');
          setOriginalLastName(userData.lastName || '');
        }
      });
      const bookingsQuery = query(collection(db, "bookings"), where("userId", "==", currentUser.uid));
      getDocs(bookingsQuery).then(querySnapshot => {
        const userBookings = [];
        querySnapshot.forEach(doc => userBookings.push({ id: doc.id, ...doc.data() }));
        setBookings(userBookings);
        setIsLoadingBookings(false);
      }).catch(() => setIsLoadingBookings(false));
    }
  }, [currentUser]);

  const handleEditToggle = () => {
    if (isEditing) {
      setFirstName(originalFirstName);
      setLastName(originalLastName);
      setProfileMessage({ type: '', text: '' });
    }
    setIsEditing(!isEditing);
  };
  
  const handleSaveProfile = async () => {
    setProfileMessage({ type: '', text: '' });
    if (!firstName.trim() || !lastName.trim()) return setProfileMessage({ type: 'error', text: t('alert_name_empty') });
    
    try {
      await updateDoc(doc(db, "users", currentUser.uid), { firstName, lastName });
      setOriginalFirstName(firstName);
      setOriginalLastName(lastName);
      setProfileMessage({ type: 'success', text: t('alert_profile_updated') });
      setIsEditing(false);
      setTimeout(() => setProfileMessage({ type: '', text: '' }), 3000);
    } catch (e) {
      setProfileMessage({ type: 'error', text: t('alert_profile_update_fail') });
    }
  };

  const handleChangePassword = () => {
    setPasswordMessage({ type: '', text: '' });
    if (newPassword !== confirmPassword) return setPasswordMessage({ type: 'error', text: t('alert_passwords_no_match') });
    if (newPassword.length < 6) return setPasswordMessage({ type: 'error', text: t('alert_password_too_short') });

    updatePassword(auth.currentUser, newPassword).then(() => {
      setPasswordMessage({ type: 'success', text: t('alert_password_updated') });
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPasswordMessage({ type: '', text: '' }), 3000);
    }).catch(() => {
      setPasswordMessage({ type: 'error', text: t('alert_password_update_fail') });
    });
  };

  const handleCancelBooking = async (bookingId) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        await updateDoc(doc(db, "bookings", bookingId), { status: "cancelled" });
        setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: "cancelled" } : b));
        alert("Booking cancelled successfully.");
      } catch (error) {
        alert("Failed to cancel booking.");
      }
    }
  };

  if (!currentUser) {
    return (
      <div className="profile-page"><div className="profile-container"><h2>{t('profile_login_prompt')}</h2></div></div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>{t('profile_title')}</h2>
        
        <div className="profile-layout">
          {/* --- სვეტი 1: პროფილის რედაქტირება --- */}
          <div className="profile-card unified">
            <div className="avatar-section">
              <div className="profile-avatar">
                {firstName ? firstName.charAt(0).toUpperCase() : (currentUser.email ? currentUser.email.charAt(0).toUpperCase() : 'U')}
              </div>
            </div>
            <div className="info-section">
              {isEditing ? (
                <>
                  <div className="form-group inline"><label htmlFor="firstName">{t('profile_name_label')}:</label><input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></div>
                  <div className="form-group inline"><label htmlFor="lastName">{t('profile_lastname_label')}:</label><input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} /></div>
                </>
              ) : (
                <>
                  <p><strong>{t('profile_name_label')}:</strong> {firstName || t('profile_name_not_specified')}</p>
                  <p><strong>{t('profile_lastname_label')}:</strong> {lastName || t('profile_name_not_specified')}</p>
                </>
              )}
              <p><strong>{t('profile_email_label')}:</strong> {currentUser.email}</p>
              {profileMessage.text && <p className={`${profileMessage.type}-message`}>{profileMessage.text}</p>}
              {isEditing ? (
                <div className="edit-buttons">
                  <button onClick={handleSaveProfile} className="save-btn">{t('profile_save_btn')}</button>
                  <button onClick={handleEditToggle} className="cancel-btn">{t('profile_cancel_btn')}</button>
                </div>
              ) : (
                <button onClick={handleEditToggle} className="edit-profile-btn">{t('profile_edit_name_btn')}</button>
              )}
            </div>
            <div className="password-section">
              <h3>{t('profile_change_password_title')}</h3>
              <div className="form-group"><label htmlFor="new-password">{t('profile_new_password_label')}</label><input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" /></div>
              <div className="form-group"><label htmlFor="confirm-password">{t('profile_confirm_password_label')}</label><input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" /></div>
              {passwordMessage.text && <p className={`${passwordMessage.type}-message`}>{passwordMessage.text}</p>}
              <button onClick={handleChangePassword} className="edit-profile-btn">{t('profile_update_password_btn')}</button>
            </div>
          </div>
          
          {/* --- სვეტი 2: ჯავშნები --- */}
          <div className="profile-card bookings-card">
            <h3>My Bookings</h3>
            {isLoadingBookings ? (<p>Loading...</p>) : bookings.length > 0 ? (
              <div className="bookings-table-wrapper">
                <table className="bookings-table">
                  <thead><tr><th>Tour</th><th>Date</th><th>Guests</th><th>Status</th><th>Actions</th></tr></thead>
                  <tbody>
                    {bookings.map(b => (
                      <tr key={b.id}>
                        <td>{b.tourName}</td>
                        <td>{b.bookingDate}</td>
                        <td>{b.numberOfPeople}</td>
                        <td><span className={`status ${b.status}`}>{b.status}</span></td>
                        <td>
                          {b.status === 'pending' && (
                            <button className="cancel-booking-btn" onClick={() => handleCancelBooking(b.id)}>Cancel</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (<p>You have no bookings yet.</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;