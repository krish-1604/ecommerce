import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import search from 'D:/app_ss/ecommerce/src/assets/search.png';
import arrow_down from 'D:/app_ss/ecommerce/src/assets/down_arrow.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div align="center" className='NavDiv'>
        <Link to="#" className="title">CayoBeach</Link>    
        <Link to="#" className='home'>Home</Link>
        <Link to="#" className='habitacions'>Habitacions</Link>
        <Link to="#" className='servicios'>Servicios</Link>
        <Link to="#" className='sobre'>Sobre nosotros</Link>
        <Link to="#" className="contact">Contacto</Link>
        <img src={search} alt="Search Logo" className="search"/>
        <a href='/'>Español</a>
        <img src={arrow_down} alt="Search Logo" className="arrow"/>
      </div>
    </nav>
  );
};

export default NavBar;
