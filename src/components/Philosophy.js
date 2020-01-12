import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import steve from  '../assets/yoga_steve.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Yoga = styled.div `
.box {
  position: relative;
  width: 100%;
}

.yogasteve {
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
background-color:rgba(11, 132, 87, 0.25);
opacity:1.0;
}

.text {
  color: #ffffff;
  font-size: 30px;
  font-family:Poppins-Medium;
  position: absolute;
  top: 52%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

}

.title {
    color:#ffffff;
    font-size: 24px;
  font-family:FrankRuhlLibre-Regular;
  padding-bottom:50px;
  font-size: 30px;
  position: absolute;
  top: 20%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;

}

.line {
    height:1px; 
    font-size:0; 
    width:6%;
    border-bottom:3px solid #ffffff;
    text-align:center;
    color: #ffffff;
  position: absolute;
  top: 23%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.touch {

  font-size: 16px;
  font-family:Poppins-Regular;
  position: absolute;
  top: 88%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius:0px;
}

@media (max-width: 1199.98px) { 

    .text{
        font-size:20px;
    }

    .title {
        font-size:18px;
    }

    .line{
        top: 23%;
        border-bottom:2px solid #ffffff;
    }

    .touch {
        font-size: 14px;
        top: 88%;
    }

}

@media (max-width: 991.98px) { 
    .text{
        font-size:14px;
    }

    .title {
        font-size:14px;
    }

    .line{
        top: 23%;
        border-bottom:2px solid #ffffff;
    }

    .touch {
        font-size: 10px;
        top: 88%;
    }
}

@media (max-width: 767.98px) {
    .text{
        font-size:11px;
    }

    .title {
        font-size:10px;
    }

    .line{
        top: 28%;
        border-bottom:2px solid #ffffff;
    }

    .touch {
        font-size: 7px;
    }
    
 }

 @media (max-width: 575.98px) { 
    .text{
        top: 59%;
        font-size:8px;
    }

    .title {
        top: 27%;
        font-size:9px;
    }

    .line{
        top: 22%;
        border-bottom:1px solid #ffffff;
    }

    .touch {
        visibility:hidden;
        font-size: 6px;
        top: 89%;
    }


  }


`

const Philosophy = () => {
    return ( 
        <Yoga>
        <div className="box">
          <Image src={steve} alt="yoga_steve" className="yogasteve"/>
          <div className="overlay">
          <p className="title">Philosophy</p>
                <div className="line"></div>
            <div className="text">
            We embrace a challenge. We disrupt convention. Our boots are polished daily, so they look good when we kick the status quo in the hoo-ha. In addition to client work, we’re all also passionate about supporting our community. In fact, we spend 30% of our time working with non-profits like the RVA Street Art Festival and our own initiative, The SoundView Project. If you love collaborating and creating great work, we want to meet you!
             </div>  
             {/* <Button smooth to="/#contact" renderAs={NavLink} className="touch no" variant="light" size="sm">get in touch</Button> */}
             <NavLink className="btn btn-light touch" smooth to="/#contact" >
             get in touch
</NavLink>
          </div>
        </div>
        </Yoga>
     );
}
 
export default Philosophy;
