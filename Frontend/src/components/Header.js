import React from 'react';
import logo from '../assets/Header/LOGO.png';
import '../assets/Header/header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo kasa" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
