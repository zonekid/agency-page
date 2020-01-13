import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import eagle_mag from  '../assets/eagle_bay_mag.jpg';
import eagle_bliss from  '../assets/eaglebay_bliss.jpg';
import eagle_construction from  '../assets/eaglebay_construction.jpg';
import eagle_groundwork from  '../assets/eaglebay_groundwork.jpg';
import eagle_web from  '../assets/eaglebay_web.jpg';
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
    padding-bottom: 180px;
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

const Eagle = () => {
    return ( 
        <Deep>
            <Row className="first-row">
                <Col className="carou" xs={10} sm={10} md={8} lg={6} xl={5}>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={eagle_mag}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={eagle_bliss}
      alt="Second slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={eagle_construction}
      alt="Third slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={eagle_groundwork}
      alt="Fourth slide"
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 pic"
      src={eagle_web}
      alt="Fifth slide"
    />


  </Carousel.Item>
</Carousel>
                </Col>
            </Row>
       <Row className="second-row">
           <Col className="information" xl={{offset: 2, span:6}}>
           <h3 className="title">Eagle Bay Hardscapes</h3>
           <p className="para">
           When we began working with Eagle Bay in 2010, they thought of themselves as just a concrete products  manufacturer. A factory. Over the years, we’ve built the company into a premier outdoor living brand. From their annual catalog and sales materials to their website and online videos, the partnership we’ve created together has dramatically increased sales year after year. And we’ve won some pretty cool awards too.
           </p>
           </Col>

           <Col className="information2" xl={{offset: 1}}>
           <p className="sub-title">Description:</p>
           <p className="sub-info">Hardscape Product Company</p>
           <p className="sub-title2">Role:</p>
           <p className="sub-info2">Social Strategy/Design</p>
           </Col>
       </Row>
</Deep>
     );
}
 
export default Eagle;