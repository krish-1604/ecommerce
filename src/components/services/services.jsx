import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import hotel1 from 'D:/app_ss/ecommerce/src/assets/events.jpeg';
import './services.css';
import { motion } from 'framer-motion'; 

const Services = () => {
    return (
        <Container className='services-container'>
            <div className='empty-div'></div>
            <div>
                <h1>Disfruta con nosotros!</h1>
                <p>Realizamos todo tipo de eventos</p>
            </div>
            <div className='row-div-1'>
                <div className="icon-text-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img src={hotel1} className="hotel1" alt="hotel pic" />
                    </motion.div>
                    <div className='empty-div-2'></div>
                    <Col>
                        <p className='upper-text'>en <b>Playa Noreste</b></p>
                        <h2 className='services-title'>TomorrowLand Beach</h2>
                        <p className='last-text'>Breve descripcion del evento que puede ocupara<br /> hasta 3 lineas de texto</p>
                        <Button>
                            <p style={{ color: 'white' }}>Me interesa</p>
                        </Button>
                    </Col>
                </div>
                <div className='empty-div-1'></div>
                <div className="icon-text-1">
                    <Col>
                        <p className='upper-text'>en <b>Playa Sur</b></p>
                        <h2 className='services-title'>World Tropical</h2>
                        <p className='last-text'>Breve descripcion del evento que puede ocupara<br /> hasta 3 lineas de texto</p>
                        <Button>
                            <p style={{ color: 'white' }}>Me interesa</p>
                        </Button>
                    </Col>
                    <div className='empty-div-2'></div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <img src={hotel1} className="hotel2" alt="hotel pic" />
                    </motion.div>
                </div>
            </div>
            <hr />
        </Container>
    );
};

export default Services;
