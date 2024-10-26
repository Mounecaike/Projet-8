import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Header/LOGO.png';
import '../Assets/Header/header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo kasa" className="logo" />
      <nav>
        <ul>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Accueil
            </NavLink>
          </li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
