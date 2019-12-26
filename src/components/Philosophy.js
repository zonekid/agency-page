import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import steve from  '../assets/yoga_steve.jpg';
import Image from 'react-bootstrap/Image';


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
  top: 56%;
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
  font-family:Poppins-Medium;
  position: absolute;
  top: 30%;
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
  top: 36%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

@media (max-width: 1199.98px) { 

    .text{
        font-size:27px;
    }

    .title {
        font-size:22px;
    }

    .line{
        top: 33%;
        border-bottom:2px solid #ffffff;
    }

}

@media (max-width: 991.98px) { 
    .text{
        font-size:20px;
    }

    .title {
        font-size:16px;
    }

    .line{
        top: 33%;
        border-bottom:2px solid #ffffff;
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
    
 }

 @media (max-width: 575.98px) { 
    .text{
        font-size:10px;
    }

    .title {
        font-size:9px;
    }

    .line{
        top: 27%;
        border-bottom:2px solid #ffffff;
    }
  }


`


class Philosophy extends Component {
    state = {  }
    render() { 
        
        return (  
            <Yoga>
<div className="box">
  <Image src={steve} alt="yoga_steve" className="yogasteve"/>
  <div className="overlay">
  <p className="title">Philosophy</p>
        <div className="line"></div>
    <div className="text">
       We believe that the work should be based on friendly relations and positive emotions, so continue to communicate with our customers and after the delivery of the project.
     </div>
  </div>
</div>
</Yoga>
         );
    }
}
 
export default Philosophy;