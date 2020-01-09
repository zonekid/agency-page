import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import bowmanbg from  '../assets/bowman_test.jpg';
import racewaybg from  '../assets/raceway_test.jpg';
import violin from  '../assets/test_violin.jpg';
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

.left{
  background-color:black
}

.intro {
  text-align: center;
  margin-top: 40%;
  font-family: Poppins-Medium;
font-size: 46px;
color: #FFFFFF;
letter-spacing: 2.3px;
}

.sub {
  font-family: FrankRuhlLibre-Regular;
font-size: 20px;
color: #FFFFFF;
letter-spacing: 1px;
text-align: center;
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

.both {
  padding: 0px;
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

.intro {
  font-size: 36px;
}

.sub {
  font-size:16px;
}
 }

 @media (max-width: 767.98px) { 
    .btn {
   width: 50px;
   height: 20px;
   border-radius:0px;
}
.intro {
  font-size: 20px;
}

.sub {
  font-size:10px;
}

.landing-button {
    padding-top:4px;
    font-size:7px;
}
  }

  @media (max-width: 575.98px) { 
    .intro {
  font-size: 14px;
}

.sub {
  font-size:10px;
}

.second {
  padding-left: 5px;
}

.second-2 {
  padding-left:5px;
}

.third {
  padding-left: 6px;
font-size: 12px;
}

.third-2 {
  padding-left:6px;
}
   }

`
const Landing = () => {
  return ( 
    <Home>
<Carousel>
  <Carousel.Item>
    <Row>
      <Col className="left both">
      
        <h2 className="intro">THE SOUNDVIEW PROJECT</h2>
        <p className="sub">Promoting The Importance of Music Education</p>
      
      </Col>
      <Col className="both" >
      <img
      fluid
       className="d-block w-100"
       src={violin}
       alt="soundview project"
      />
      </Col>
    </Row>

    <Carousel.Caption>
    <Button className="landing-button"  variant="outline-light">Previous</Button>
    <Button className="landing-button"  variant="outline-light">Next</Button>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Row>
      <Col className="left both">
      
        <h2 className="intro second">A. SMITH BOWMAN</h2>
        <p className="sub second-2">Innovative Experiment Turned World's Best Bourbon</p>
      
      </Col>
      <Col className="both" >
      <img
      fluid
       className="d-block w-100"
       src={bowmanbg}
       alt="bowman distillery"
      />
      </Col>
    </Row>

    <Carousel.Caption>
    <Button href="#" className="landing-button" variant="outline-light" data-slide="prev">Previous</Button>
    <Button href="#" className="landing-button" variant="outline-light" data-slide="next">Next</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Row>
      <Col className="left both">
      
        <h2 className="intro third">RICHMOND RACEWAY</h2>
        <p className="sub third-2">America's Premiere Short Track</p>
      
      </Col>
      <Col className="both" >
      <img
      fluid
       className="d-block w-100"
       src={racewaybg}
       alt="richmond raceway"
      />
      </Col>
    </Row>

    <Carousel.Caption>
    <Button variant="outline-light" className="landing-button" data-slide="prev">Previous</Button>
    <Button variant="outline-light" className="landing-button" data-slide="next">Next</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Home>

   );
}
 
export default Landing;
