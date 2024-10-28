import React from 'react';
import logo from '../Assets/Footer/LOGO.png'; 
import '../Assets/Footer/footer.css'; 

function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <img src={logo} alt="Logo" />
        <p>© 2020 Kasa. All<span className='break-responsive-footer'></span> rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
