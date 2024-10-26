import React from 'react';
import '../Assets/Error404/error404.css'

function Error() {
  return (
      <main className='Error-page'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d’accueil</a>
      </main>
  );
}

export default Error;
