import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import better from  '../assets/bettermeds_port.jpg';
import eagle from  '../assets/eaglebay_port.jpg';
import pollak from  '../assets/pollak_port.jpg';
import soundview from  '../assets/soundview_port.jpg';
import steveyoga from  '../assets/steve_port.jpg';
import westrock from  '../assets/westrock_port.jpg';

const Work = styled.div `

background-color: #000000;

.title-works {
    font-family: Poppins-Medium;
font-size: 24px;
color: #ffffff;
letter-spacing: 1.2px;
text-align:center;
padding-top:50px;
}

.line {
    height:1px; 
    font-size:0; 
    margin:0 auto;
    width:4%;
    border-bottom:3px solid #cfcd00;

}

.first-row {
    padding-top:50px;
   justify-content:center;
    
}

.second-row {
    padding-top:25px;
   justify-content:center;
    padding-bottom: 80px;
}

.box {
  position: relative;
  width: 100%;
}

.picture {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;

}

.box:hover .overlay {
background-color:rgba(0, 0, 0, 0.80);
opacity:1.0;
}

.title {
    color:#ffffff;
    font-size: 24px;
  font-family:FrankRuhlLibre-Regular;
  padding-bottom:50px;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
   text-transform: uppercase;
}

@media (max-width: 1199.98px) { 

    .line {
        width:6%;
    }

 }

@media (max-width: 991.98px) {

    .line {
        width:6%;
    }
}

@media (max-width: 767.98px) {

    .line {
        width:6%;
    } 



}

@media (max-width: 575.98px) {

    .line {
        width:10%;
    } 


}
`

const Portfolio = () => {
    return ( 
        <Work>
                  
                <Row className="title-row">
                    <Col >    
                    <p className="title-works">Work</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <div className="line"></div>
                    </Col>
                </Row>
               
                <Row className="first-row">
                    
    <Col xs={10} sm={10} md={3} lg={3} xl={3}>  <div className="box">
          <Image fluid src={pollak} alt="pollak" className="picture"/>
          <div className="overlay">
          <p className="title">VCU Pollak Society</p>
          </div>
        </div></Col>
    <Col xs={10} sm={10} md={3} lg={3} xl={3}><div className="box">
          <Image fluid src={steveyoga} alt="steve" className="picture"/>
          <div className="overlay">
          <p className="title">Introducing Patiyogi Steve</p>
          </div>
        </div></Col>
    <Col xs={10} sm={10} md={3} lg={3} xl={3}><div className="box">
          <Image fluid src={westrock} alt="westrock" className="picture"/>
          <div className="overlay">
          <p className="title">Westrock Coffee Television</p>
          </div>
        </div></Col>
        
  </Row>

  <Row className="second-row">
                    
                    <Col xs={10} sm={10} md={3} lg={3} xl={3}>  <div className="box">
                          <Image fluid src={soundview} alt="soundview" className="picture"/>
                          <div className="overlay">
                          <p className="title">The Soundview Project</p>
                          </div>
                        </div></Col>
                    <Col xs={10} sm={10} md={3} lg={3} xl={3}><div className="box">
                          <Image fluid src={eagle} alt="eagle bay" className="picture"/>
                          <div className="overlay">
                          <p className="title">Eagle Bay Hardscapes</p>
                          </div>
                        </div></Col>
                    <Col xs={10} sm={10} md={3} lg={3} xl={3}><div className="box">
                          <Image fluid src={better} alt="better med" className="picture"/>
                          <div className="overlay">
                          <p className="title">Better Med</p>
                          </div>
                        </div></Col>
                        
                  </Row>
             <Row>
                 <Col>
                 <p>

                 </p>
                 </Col>
                 </Row>   
             
                </Work>
     );
}
 
export default Portfolio;
