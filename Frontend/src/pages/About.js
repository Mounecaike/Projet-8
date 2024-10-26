import React, { useEffect, useState } from 'react';
import Collapse from '../components/collapse';
import data from '../Assets/About/About-information.json'; 
import '../Assets/About/About.css'
import Banner from '../components/banner'
import Aboutbanner from '../Assets/Banner/paysage-about.png'


const About = () => {
  const [collapses, setCollapses] = useState([]);

  useEffect(() => {
    setCollapses(data);
  }, []);

  return (
    <main>
      <Banner imageSrc={Aboutbanner} altText={"photo de paysage"} />
      {collapses.map(({ id, title, content }) => (
      <Collapse customClass="about" key={id} title={title} content={content} />
      ))}
    </main>
  );
};

export default About;
