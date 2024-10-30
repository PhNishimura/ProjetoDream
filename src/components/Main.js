import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './main.css';
import banner from "../img/banner.png";
import test from "../img/jogo1.png";

const ExampleCarouselImage = ({ src, alt }) => (
  <img className="d-block w-100" src={src} alt={alt} style={{ height: '250px',  objectFit: 'cover' }}/>
);

const Main = () => {
  return (
    <main>
      <img src={banner} alt='banner' className='banner-image' />
      <div className='container'>
        <h1 className='cB'>PROMOÇÕES</h1>
        <div className='box-promo'>
          <Carousel>
            <Carousel.Item>
              <ExampleCarouselImage src={test} alt="Primeiro Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={test} alt="Segundo Slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={test} alt="Terceiro Slide" />
            </Carousel.Item>
          </Carousel>
          <div className='detais' >
            <h1>THE LAST OF US II</h1>
            <div data-tooltip="Price:R$59" class="button">
              <div class="button-wrapper">
                <div class="text">COMPRE JÁ!</div>
                  <span class="icon">
                    <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
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
