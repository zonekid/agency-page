import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import sound_bieber from  '../assets/soundview_bieber.jpg';
import sound_class from  '../assets/soundview_class.jpg';
import sound_class2 from  '../assets/soundview_class2.jpg';
import sound_guitar from  '../assets/soundview_guitar.jpg';
import sound_performance from  '../assets/soundview_performance.jpg';
import sound_raise from  '../assets/soundview_raise.jpg';
import './font.css';

const Deep = styled.div `

background-color: #000000;

.first-row {
    padding-top: 200px;
}

.carou {
    margin: 0 auto;
}

.title {
    color: #ffffff;
    font-family: Poppins-Medium;
}

.para {
    color: #ffffff;
    font-family: Poppins-Medium;
}

.pic {
    
}

.second-row {
    padding-top: 100px;
    padding-bottom: 100px;
}

.sub-title {
    color: #ffffff;
    font-weight:bold;
    font-family: Poppins-Medium;
}

.sub-info {
    color: #ffffff;
    font-family: Poppins-Medium;
}

.sub-title2 {
    padding-top:8px;
    color: #ffffff;
    font-weight:bold;
    font-family: Poppins-Medium;
}

.sub-info2 {
    color: #ffffff;
    font-family: Poppins-Medium;
}

@media (max-width: 575.98px) {
    .first-row {
        padding-top: 120px;
    }

    .second-row {
        padding-top: 80px;
    }

    .information {
        text-align: center;

    }

    .information2 {
        text-align: center;
        
    }
}

`

const Soundview = () => {
    return ( 
        <Deep>
            <Row className="first-row">
                <Col className="carou" xs={10} sm={10} md={8} lg={6} xl={5}>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_bieber}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_class}
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_class2}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_guitar}
      alt="Fourth slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_performance}
      alt="Fifth slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={sound_raise}
      alt="Sixth slide"
    />


  </Carousel.Item>
</Carousel>
                </Col>
            </Row>
       <Row className="second-row">
           <Col className="information" xl={{offset: 2, span:6}}>
           <h3 className="title">THE SOUNDVIEW PROJECT</h3>
           <p className="para">
           The SoundView Project is an experiment designed to give the public a glimpse inside the songwriting and recording process by challenging a musician to expose their methods. Inside the small, street-level gallery at Release the Hounds, a musician takes up residence for 1 month and attempts to write and record 5 songs “in public.” There are no creative requirements other than the songs have to be brand new, conceived within the 8X20 foot room. The musician is also allowed to bring in friends to collaborate with throughout the project. It’s fascinating to watch and hear the songs as they develop and observe how public exposure and street energy effect the music. The deeper purpose of The SoundView Project is to raise awareness for the importance of youth music education in our city.  We will be collecting donations and lightly used instruments that will be distributed to children and music programs in need.
           </p>
           </Col>

           <Col className="information2" xl={{offset: 1}}>
           <p className="sub-title">Description:</p>
           <p className="sub-info">Social Good</p>
           <p className="sub-title2">Role:</p>
           <p className="sub-info2">Project Management/Design</p>
           </Col>
       </Row>
</Deep>
     );
}
 
export default Soundview;