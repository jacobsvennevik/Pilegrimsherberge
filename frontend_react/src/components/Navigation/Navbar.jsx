import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navigation border--bottom pt1">
      <ul className="no-bullets list--inline pb1 bold">
        <li className="small mr2">
          <Link className="link link--text" to="/">Who We Are</Link>
        </li>
        <li className="small mr2">
          <Link className="link link--text" to="/destinations">Destinations</Link>
        </li>
        <li className="small mr2">
          <Link className="link link--text" to="/pricing">Pricing</Link>
        </li>
        <li className="small">
          <Link className="link link--text" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

