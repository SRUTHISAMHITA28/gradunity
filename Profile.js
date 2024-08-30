// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    reg_no: '',
    phone_no: '',
    degree: '',
    year_of_graduation: '',
    location: '',
    occupation: ''
  });

  useEffect(() => {
    // Fetch user profile data (to be implemented)
    axios.get('http://localhost:5000/profile', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }).then(response => {
      setProfileData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile data in the backend (to be implemented)
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={profileData.name} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={profileData.email} onChange={handleChange} />
        <label>Phone No:</label>
        <input type="text" name="phone_no" value={profileData.phone_no} onChange={handleChange} />
        <label>Degree:</label>
        <input type="text" name="degree" value={profileData.degree} onChange={handleChange} />
        <label>Year of Graduation:</label>
        <input type="text" name="year_of_graduation" value={profileData.year_of_graduation} onChange={handleChange} />
        <label>Location:</label>
        <input type="text" name="location" value={profileData.location} onChange={handleChange} />
        <label>Occupation:</label>
        <input type="text" name="occupation" value={profileData.occupation} onChange={handleChange} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
