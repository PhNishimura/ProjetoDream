import React from 'react';
import './main.css';
import banner from "/Users/pedro.bachaalani/3D Objects/projeto_dream/src/img/banner.png"
const Main = () => {
  return (
    <main>
      <img src={banner} alt='banner' className='banner-image'/>
      <h1>PROMOÇÕES</h1>
    </main>
  );
};

export default Main;
