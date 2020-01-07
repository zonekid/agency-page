import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Crawley from  '../assets/Crawley.png';
import Mills from  '../assets/Mills.png';
import Moffitt from  '../assets/Moffitt.png';
import Tigani from  '../assets/Tigani.png';


const Team = styled.div `
.title-row {
padding-top: 50px;
}

.title-team {
font-family: FrankRuhlLibre-Regular;
font-size: 24px;
color: #000000;
letter-spacing: 1.2px;
text-align: center;
}

.line {
    height:1px; 
    font-size:0; 
    margin:0 auto;
    width:4%;
    border-bottom:3px solid #000000;
}

.second-row {
    text-align: center;
    padding-top:120px;
}

.name {
    font-family: Poppins-Medium;
font-size: 36px;
color: #000000;
letter-spacing: 1.8px;
line-height: 42px;
padding-top:10px;
}

.role {
    font-family: FrankRuhlLibre-Regular;
font-size: 16px;
color: #000000;
letter-spacing: 0.8px;
}

.info {
    font-family: Poppins-Medium;
font-size: 30px;
color: #FE5C48;
letter-spacing: 1.5px;
text-align: center;
line-height: 45px;
padding-top:150px;
}

.touch {
    background: #000000;
    border-radius: 0px;
    font-family:Poppins-Regular;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 65px;
}

@media (max-width: 991.98px) { 
    .second-row {
        padding-top: 100px;
    }
    .info{
        padding-top: 100px;
    }

    .touch {
        margin-top:70px;
    }
}

@media (max-width: 767.98px) { 
    .second-row {
        justify-content: center;
    }
 }

 @media (max-width: 575.98px) { 
     .info {
         padding-top:60px;
         font-size: 20px;
     }
  }

`



const Teams = () => {

        return ( 
<Team>
<Row className="title-row">
                    <Col >    
                    <p className="title-team">Our Team</p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <div className="line"></div>
                    </Col>
                </Row>

                <Row className="second-row">
                    <Col xs={10} sm={10} md={3} lg={3} xl={3}>
                    <div>
                        <Image fluid src={Mills} alt="John Mills"/>
                        <h3 className="name">
                            John Mills
                        </h3>
                        <p className="role">
                        Founder/Creative Strategist
                        </p>
                    </div>
                    </Col>
               
                    <Col xs={10} sm={10} md={3} lg={3} xl={3}>
                    <div>
                        <Image fluid src={Crawley} alt="Kirsten Crawley"/>
                        <h3 className="name">
                        Kirsten Crawley
                        </h3>
                        <p className="role">
                        Account Manager
                        </p>
                    </div>
                    </Col>

                    <Col xs={10} sm={10} md={3} lg={3} xl={3}>
                    <div>
                        <Image fluid src={Moffitt} alt="James Moffitt"/>
                        <h3 className="name">
                        James Moffitt
                        </h3>
                        <p className="role">
                        Content Strategist
                        </p>
                    </div>
                    </Col>

                    <Col xs={10} sm={10} md={3} lg={3} xl={3}>
                    <div>
                        <Image fluid src={Tigani} alt="Whitney Tigani"/>
                        <h3 className="name">
                        Whitney Tigani
                        </h3>
                        <p className="role">
                        Senior Designer
                        </p>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                        <p className="info">
                        We pride ourselves on being a truly collaborative agency. From account manager to copywriter, everyone is included in the strategic and creative development of a project. That’s right…everyone works on everything at RTH. By breaking down traditional agency silos, we utilize 100% of our collective brain power. And because of this, we create more impactful work for our clients.
                        </p>
                    </Row>
                    <Row>
                    <Button className="touch" variant="dark" size="sm">get in touch</Button>
                    </Row>
                </Team>

         );
}
 
export default Teams;