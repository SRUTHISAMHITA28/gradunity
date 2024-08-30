import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <input type="text" placeholder="Search..." />
      <div className="profile-icon">
        <span>Profile</span>
        <div className="dropdown-menu">
          <Link to="/profile">View Profile</Link>
          <Link to="/settings">Settings & Privacy</Link>
          <Link to="/help">Help</Link>
          <Link to="/logout">Sign Out</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
