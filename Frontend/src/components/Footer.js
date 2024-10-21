import React from 'react';
import logo from '../assets/Footer/LOGO.png'; 
import '../assets/Footer/footer.css'; 

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <img src={logo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
