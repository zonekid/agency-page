import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import pollak1 from  '../assets/Pollak-1.jpg';
import pollak2 from  '../assets/Pollak-2.jpg';
import pollak3 from  '../assets/Pollak-3.jpg';
import pollak4 from  '../assets/Pollak-4.jpg';
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

const Pollak = () => {
    return ( 
        <Deep>
            <Row className="first-row">
                <Col className="carou" xs={10} sm={10} md={8} lg={6} xl={5}>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={pollak1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={pollak2}
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={pollak3}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={pollak4}
      alt="Fourth slide"
    />


  </Carousel.Item>
</Carousel>
                </Col>
            </Row>
       <Row className="second-row">
           <Col className="information" xl={{offset: 2, span:6}}>
           <h3 className="title">VCU POLLAK SOCIETY</h3>
           <p className="para">
           The VCU Arts School is ranked the #1 public arts and design program in the country. So, we were humbled to be asked to create a mailing system for their giving membership, Pollack Society. We designed a flexible and elegant (and affordable) color-coded system with a die-cut envelope from which the information cards are pulled. The work garnered high praise from the VCU community and won an AIGA and Richmond One Show award.
           </p>
           </Col>

           <Col className="information2" xl={{offset: 1}}>
           <p className="sub-title">Description:</p>
           <p className="sub-info">Direct Mailer</p>
           <p className="sub-title2">Role:</p>
           <p className="sub-info2">Strategy/Design</p>
           </Col>
       </Row>
</Deep>
     );
}
 
export default Pollak;