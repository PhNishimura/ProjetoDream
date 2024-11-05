
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './main.css';
import banner from "../img/banner.png";
import test from "../img/jogo1.png";
import maco from "../img/mamaco.jpeg"
import homi from "../img/spider.jpg"


const gamesName = [
  {
    name: "THE LAST OF US II",
    price: "R$59", 
    image: test,
    alt: "Primeiro Slide"
  },
  {
    name: "BLACK WULKONG",
    price: "R$100", 
    image: maco,
    alt: "Segundo Slide"
  },
  {
    name: "SPIDER MAN II PC",
    price: "R$80", 
    image: homi,
    alt: "Terceiro Slide"
  },


]

const ExampleCarouselImage = ({ src, alt }) => (
  <img className="d-block w-100" src={src} alt={alt} style={{ height: '250px',  objectFit: 'cover' }}/>
);

const Main = () => {
  const [currentGame, setCurrentGame] = useState(gamesName[0]);


  const handleSelect = (selectedIndex) => {
    setCurrentGame(gamesName[selectedIndex]); 
  };

  return (
    <main>
      <img src={banner} alt='banner' className='banner-image' />
      <div className='container'>
        <h1 className='cB'>PROMOÇÕES</h1>
        <div className='box-promo'>
          <Carousel activeIndex={gamesName.indexOf(currentGame)} onSelect={handleSelect}>
            {gamesName.map((game, index) => (
              <Carousel.Item key={index}>
                <ExampleCarouselImage src={game.image} alt={game.alt} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className='detais'>
            <h1>{currentGame.name}</h1>
            <div data-tooltip={`Valor: ${currentGame.price}`} className="button">
              <div className="button-wrapper">
                <div className="text">COMPRE JÁ!</div>
                <span className="icon">
                  <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
