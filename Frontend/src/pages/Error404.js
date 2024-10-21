import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../assets/Error404/error404.css'

function Error() {
  return (
    <div>
      <Header />
      <main className='Error-page'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
