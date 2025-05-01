import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Student Manager</h1>
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/add" className="nav__link">
              Add Member
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/members" className="nav__link">
              View Members
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
