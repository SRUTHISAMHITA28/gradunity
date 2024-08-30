import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to GradUnity Dashboard</h1>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/job-portal">Job Portal</Link>
        <Link to="/donation-portal">Donation Portal</Link>
        <Link to="/mentorship">Mentorship Program</Link>
        <Link to="/events">Events Calendar</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/survey">Survey Forum</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
