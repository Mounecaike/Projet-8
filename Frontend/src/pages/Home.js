import React from 'react';
import Banner from '../components/banner'
import Homebanner from '../Assets/Banner/paysage-home.jpeg'
import '../Assets/Home/home.css'
import Card from '../components/card'

function Home() {
  return (
      <main>
          <div className='banner-with-text'>
            <Banner imageSrc={Homebanner} altText={"photo de paysage"} />
            <p className='banner-text'>Chez vous, partout et ailleurs</p>
          </div>
      <section className='gallery'>
        <Card />
      </section>
      </main>
  );
}

export default Home;
