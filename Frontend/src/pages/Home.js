import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Bienvenue sur la page d'accueil</h1>
        <p>Ceci est la page d'accueil de mon site.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
