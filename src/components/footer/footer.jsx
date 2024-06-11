import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <Container className='footer-container'>
            <div className='footer-start'>
            </div>
            <div className='footer-middle'>
                <div className='footer-title'>
                    <p className='footer-name'>CayoBeach</p>
                </div>
                <div className='footer-text'>
                    <p>Description of the hotel. Details que los<br></br> hagan especial</p>
                </div>
                <div className='footer-endtext'>
                    <p>Logo Hotel 2023.Derechos reservados </p>
                </div>
            </div>
            <div className='footer-start'>
            </div>
            <div>
                <div className='footer-start-2'>
                </div>
                <div className='footer-middle-1'>
                    <div className='footer-link-1'>
                        <a className='footer-links' href='/'>Habitaciones</a>
                        <a className='footer-links' href='/'>Servicios</a>
                        <a className='footer-links' href='/'>Eventos</a>
                    </div>
                    <div className='footer-link-1'>
                        <a className='footer-links' href='/'>Habitaciones</a>
                        <a className='footer-links'href='/'>Servicios</a>
                        <a className='footer-links'href='/'>Eventos</a>
                    </div>
                    <div className='footer-link-1'>
                        <a className='footer-links'href='/'>Habitaciones</a>
                        <a className='footer-links'href='/'>Servicios</a>
                        <a className='footer-links'href='/'>Eventos</a>
                    </div>
                </div>
                <div className='footer-start-1'>
                </div>
                <div>
                    <div className='footer-middle-1'>
                        <p>Encuentranos en:</p>
                        <div className='small-text-space'></div>
                        <p>FB</p>
                        <div className='small-text-space'></div>
                        <p>IG</p>
                        <div className='small-text-space'></div>
                        <p>X</p>
                    </div>
                    
                </div>
            </div>
            <div className='footer-start'>
            </div>
        </Container>
    );
};

export default Footer;