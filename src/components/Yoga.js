import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
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

const Yoga = () => {
    return ( 
        <Deep>
            <Row className="first-row">
                <Col className="carou" xs={10} sm={10} md={8} lg={6} xl={5}>
                <Carousel>
  <Carousel.Item>

  <div className="d-block w-100 pic" style={{height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
  <iframe  src="https://www.youtube.com/embed/aW8DIpd5N6M" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </ResponsiveEmbed>
</div>

  </Carousel.Item>
  <Carousel.Item>
  <div className="d-block w-100 pic" style={{height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
  <iframe  src="https://www.youtube.com/embed/gQYOSSaTgpY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </ResponsiveEmbed>
</div>


  </Carousel.Item>
  <Carousel.Item>
  <div className="d-block w-100 pic" style={{height: 'auto' }}>
  <ResponsiveEmbed aspectRatio="16by9">
  <iframe  src="https://www.youtube.com/embed/PDtq3mf1gc0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </ResponsiveEmbed>
</div>

  </Carousel.Item>
 
</Carousel>
                </Col>
            </Row>
       <Row className="second-row">
           <Col className="information" xl={{offset: 2, span:6}}>
           <h3 className="title">Introducing Backyard Bliss with Patiyogi Steve</h3>
           <p className="para">
           We’ve been hard at work developing a video series for one of our favorite clients, Eagle Bay Hardscapes. Selling pavers is about selling a lifestyle, not just a product. So, we developed the PatiYogi character to personify the work-life balance we all struggle with at times.

Check it out. And try to chill out a little while you’re at it.
           </p>
           </Col>

           <Col className="information2" xl={{offset: 1}}>
           <p className="sub-title">Description:</p>
           <p className="sub-info">Video</p>
           <p className="sub-title2">Role:</p>
           <p className="sub-info2">Strategy/Design/Production</p>
           </Col>
       </Row>
</Deep>
     );
}
 
export default Yoga;