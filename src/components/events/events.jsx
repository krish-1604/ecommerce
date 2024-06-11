import React from 'react';
import '../habitacions/habitacions.css';
import events from 'D:/app_ss/ecommerce/src/assets/events.jpeg';
import './events.css';
import { Container, Button } from 'react-bootstrap';

const Events = () => {
  return (
    <Container>
        <div className='events-pic'>
            <img src={events} className='events-bg' alt='events'/>
        </div>
        <div>
            <h1 className='events-title'>Una super experiencia para contar</h1>
            <Button className='button-1'>
                <div className="buttondiv">
                    <p className='events-button-text'>Reservar ahora</p>
                </div>
            </Button>
        </div>
        
        <hr/>
    </Container>
  );
};

export default Events;