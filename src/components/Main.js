import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './main.css';
import banner from "../img/banner.png";
import test from "../img/jogo1.png";
import tests from "../img/testes.jpg";

const ExampleCarouselImage = ({ src, alt }) => (
  <img className="d-block w-100" src={src} alt={alt} style={{ height: '250px',  objectFit: 'cover' }}/>
);

const Main = () => {
  return (
    <main>
      <img src={banner} alt='banner' className='banner-image' />
      <div className='container'>
        <h1>PROMOÇÕES</h1>
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
        </div>
      </div>


    </main>
  );
};

export default Main;
