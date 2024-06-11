import React from "react";
import { Container, Col, Button } from 'react-bootstrap';
import bg from 'D:/app_ss/ecommerce/src/assets/bg.png';
import NavBar from '../navbar/navbar.jsx';
import './home.css';
import calendar from 'D:/app_ss/ecommerce/src/assets/calender.png';
import people from 'D:/app_ss/ecommerce/src/assets/persons.png';
import search from 'D:/app_ss/ecommerce/src/assets/search.png';
import Footer from "../footer/footer.jsx";
import Services from "../services/services.jsx";
import Habitacions from "../habitacions/habitacions.jsx";
import Events from "../events/events.jsx";

const Home = () => {
  return (
    <Container fluid className="container">
      <NavBar />
      <div>
        <img src={bg} alt="background" className="bg" />
      </div>
      <div className="rowdiv">
        <div className="icon-text">
          <img src={calendar} className="calendar" alt="calendar"/>
          <Col>
            <p>Fecha entrada</p>
            <p>10 Junio 2021</p>
          </Col>
        </div>
        <div style={{ width: '5%' }}></div>
        <div className="icon-text">
          <img src={calendar} className="calendar" alt="calendar"/>
          <Col>
            <p>Fecha salida</p>
            <p>15 Junio 2021</p>
          </Col>
        </div>
        <div style={{ width: '5%' }}></div>
        <div className="icon-text">
          <img src={people} className="people" alt="people" />
          <Col>
            <p>Cuartos para</p>
            <p>3 personas</p>
          </Col>
        </div>
        <div style={{ width: '5%' }}></div>
        <Button>
          <div className="buttondiv">
            <img src={search} alt="Search Logo" className="image" />
            <p>Reservar ahora</p>
          </div>
        </Button>
      </div>
      <hr/>
      <Services/>
      <Events/>
      <Habitacions/>
      <Footer/>
    </Container>
    
  );
};

export default Home;
