import React from 'react';
import './header.css'; 
import logo from'../img/logo.png'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt='logo' className='logo-image'/> 
          Dream
        </a>
      </div>
      <div className="navbar-container">
        <ul className="nav-links">
          <li><a href="#home">Loja</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Suporte</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
