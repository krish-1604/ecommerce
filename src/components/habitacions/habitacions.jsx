import React from 'react';
import { Container } from 'react-bootstrap';
import './habitacions.css';
import beds from 'D:/app_ss/ecommerce/src/assets/events.jpeg';

const Habitacions = () => {
    return (
        <Container>
            <div className='empty-div-habi'></div>
            <div>
                <h1>Habitaciones de lujo</h1>
                <p>Vea todo nuestro catálogo de habitaciones</p>
            </div>
            <div className='empty-div-habi-2'></div>
            <div className='habi-row-div'>
                <div >
                    <img src={beds} className="bed" alt="bed pic" />
                    <h4 style={{ textAlign: 'left' }}>Wilderness Club at Big Cedar</h4>
                    <p style={{ textAlign: 'left' }}>2 Baños</p>
                    <h3 style={{ textAlign: 'left' }}>816 / 3 Noches</h3>
                </div>
                <div className='empty-div-habi-3'></div>
                <div>
                    <img src={beds} className="bed" alt="bed pic" />
                    <h4 style={{ textAlign: 'left' }}>Wilderness Club at Big Cedar</h4>
                    <p style={{ textAlign: 'left' }}>2 Baños</p>
                    <h3 style={{ textAlign: 'left' }}>816 / 3 Noches</h3>
                </div>
                <div className='empty-div-habi-3'></div>
                <div>
                    <img src={beds} className="bed" alt="bed pic" />
                    <h4 style={{ textAlign: 'left' }}>Wilderness Club at Big Cedar</h4>
                    <p style={{ textAlign: 'left' }}>2 Baños</p>
                    <h3 style={{ textAlign: 'left' }}>816 / 3 Noches</h3>
                </div>
            </div>
            <div className='empty-div-habi'></div>
            <hr />
        </Container>
    );
};

export default Habitacions;
