import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pdot from  '../assets/pink_dot.png';
import bdot from  '../assets/blue_dot.png';
import odot from  '../assets/orange_dot.png';

const Last = styled.div `

background-color: #000000;

.title-row {
padding-top:50px;
}

.title-team {
    font-family: FrankRuhlLibre-Regular;
font-size: 24px;
color: #FFFFFF;
letter-spacing: 1.2px;
text-align: center;

}

.line {
    height:1px; 
    font-size:0; 
    margin:0 auto;
    width:4%;
    border-bottom:3px solid #ffffff;
}

.second-row {
    padding-top: 50px;
    text-align: center;
}

.pink {
  list-style-image:url(${pdot});
  display: inline-block;
        text-align:left;
}

.blue {
    list-style-image:url(${bdot});
    display: inline-block;
        text-align:left;
}

.orange {
    list-style-image:url(${odot});
    display: inline-block;
        text-align:left;
}

li {
    color: #ffffff;
}


`

const Contact = () => {
    return ( 
        <Last>
        <Row className="title-row">
                <Col >    
                <p className="title-team">Contact Us</p>
                </Col>
            </Row>
            <Row>
                <Col >
                <div className="line"></div>
                </Col>
            </Row>
            <Row className="second-row">
             
                <Col>
                <ul className="pink">
                    <li>
                    1805 E. Grace St. Ste 200 <br></br>Richmond, VA. 23223 
                    </li>
                </ul>
                </Col>

                <Col>
                <ul className="blue">
                    <li>
                    804-343-1411 
                    </li>
                </ul>
                </Col>
                <Col>
                <ul className="orange">
                    <li>
                    woof@releasethehounds.tv 
                    </li>
                </ul>
                </Col>
     
                </Row>
    </Last>
     );
}
 
export default Contact;

