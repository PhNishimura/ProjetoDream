import React from 'react';
import './main.css';
import banner from "../img/banner.png"
const Main = () => {
  return (
    <main>
      <img src={banner} alt='banner' className='banner-image'/>

      <div className='box-promo'>
        <h1>PROMOÇÕES</h1>
      </div>
      <h1>PROMOÇÕES</h1>
    </main>
  );
};

export default Main;
