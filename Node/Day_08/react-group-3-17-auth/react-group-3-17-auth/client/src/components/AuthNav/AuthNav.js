import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AuthNav.module.css';

const AuthNav = () => (
  <ul className={classes.nav}>
    <li>
      <NavLink
        to="/signup"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign up
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/signin"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Sign in
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
