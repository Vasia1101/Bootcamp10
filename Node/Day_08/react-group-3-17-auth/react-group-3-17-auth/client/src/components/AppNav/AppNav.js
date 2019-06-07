import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = ({ isAuthenticated }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

    {isAuthenticated && (
      <>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </>
    )}
  </nav>
);

export default AppNav;
