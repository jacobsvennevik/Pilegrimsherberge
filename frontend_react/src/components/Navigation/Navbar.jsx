import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navigation border--bottom pt1">
      <ul className="no-bullets list--inline pb1 bold">
        <li className="small mr2">
          <Link className="link link--text" to="/">Pilgrimsherberget</Link>
        </li>
        <li className="small mr2">
          <Link className="link link--text" to="/Cafe">Cafe</Link>
        </li>
        <li className="small mr2">
          <Link className="link link--text" to="/Contact">Kontakt</Link>
        </li>
        <li className="small mr 2">
          <Link className="link link--text" to="/Courses">Kurs</Link>
        </li>
        <li className="small mr 2">
          <Link className="link link--text" to="/Utleie">Utleie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

