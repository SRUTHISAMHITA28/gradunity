// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <ul>
        <li><Link to="/profile">View Profile</Link></li>
        <li><Link to="/job-portal">Job Portal</Link></li>
        <li><Link to="/donation-portal">Donation Portal</Link></li>
        <li><Link to="/mentorship">Mentorship Program</Link></li>
        <li><Link to="/events">Events Calendar</Link></li>
        <li><Link to="/blog">Write a Blog</Link></li>
        <li><Link to="/survey">Feedback Survey</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;
