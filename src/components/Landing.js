import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import bowmanbg from  '../assets/bowman_bg.jpg';
import soundbg from  '../assets/soundview_bg.jpg';
import racewaybg from  '../assets/raceway_bg.jpg';
import Button from 'react-bootstrap/Button';


const Home = styled.div `

.carousel-control-prev-icon {
margin-right: 150px;
width:25px;
height: 25px;
}

.carousel-control-next-icon {
margin-left: 150px;
width:25px;
height: 25px;
}

.btn {
   width: 140px;
   height: 50px;
   border-radius:0px;
}

.landing-button {
    padding-top:10px;
    font-size:18px;
}

@media (max-width: 991.98px) { 
    .btn {
   width: 110px;
   height: 35px;
   border-radius:0px;
}

.landing-button {
    padding-top:0px;
    font-size:15px;
}
 }

 @media (max-width: 767.98px) { 
    .btn {
   width: 50px;
   height: 20px;
   border-radius:0px;
}

.landing-button {
    padding-top:4px;
    font-size:7px;
}
  }

`


class Main extends Component {
    state = {  }
    render() { 
        
        return ( 
<div>
    <Home>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bowmanbg}
      alt="First slide"
    />
    <Carousel.Caption>
    <Button className="landing-button"  variant="outline-light">Previous</Button>
    <Button className="landing-button"  variant="outline-light">Next</Button>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={soundbg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button href="#" className="landing-button" variant="outline-light" data-slide="prev">Previous</Button>
    <Button href="#" className="landing-button" variant="outline-light" data-slide="next">Next</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={racewaybg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button variant="outline-light" className="landing-button" data-slide="prev">Previous</Button>
    <Button variant="outline-light" className="landing-button" data-slide="next">Next</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Home>
</div>

         );
    }
}
 
export default Main;