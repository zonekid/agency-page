import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arton from  '../assets/arton_logo.png';
import fc from  '../assets/fc_logo.png';
import rr_logo from  '../assets/rr_logo.png';
import smith from  '../assets/smithbowman_logo.png';
import Image from 'react-bootstrap/Image';
import './font.css';

const Test = styled.div `

background-color: #DED5C4;

.first-row {
    padding-top:50px;
}

.title {
    font-family: FrankRuhlLibre-Regular;
font-size: 24px;
color: #000000;
letter-spacing: 1.2px;
}
.line {

    height:1px; 
    font-size:0; 
    width:4%;
    border-bottom:3px solid #000000;
}

.words {
    font-family: Poppins-Medium;
font-size: 30px;
color: #FE5C48;
letter-spacing: 1.5px;
line-height: 45px;
}

.quote {
    font-family: Poppins-Regular;
font-size: 72px;
color: #000000;
letter-spacing: 3.6px;
}

.second-row {
padding-top:120px;
}

.third-row {
    padding-top:140px;
    text-align:center;
}

.icon4 {
    padding-top:8px;
}

.icon {
    background-color:#ffffff;
    padding: 20px 20px 50px 20px;
}

.points {
    cursor: pointer;
}

.logos {
    cursor: pointer;
}

@media (max-width: 991.98px) { 
    .quote {
        display: none;
    }

    .second-row {
        padding-top: 80px;
    }

    .third-row {
        padding-top: 100px;
    }
 }

 @media (max-width: 767.98px) { 

     .title {
         text-align:center;
     }

     .line {
         margin: 0 auto;
         width: 12%;
     }

     .points {
        display: none;
     }

     .words {
         font-size: 20px;
     }
  }

`

let richmond = `Release The Hounds is a spectacular creative agency that can make pretty much any vision you've got come to life! The group is brilliant and patient, and works hard to meet their client's needs. It's a pleasure to work with them and we always look forward to the next project with this dynamo team! ~ Ian Stowe - Director of Activities`;

let liquor = `I would personally like to thank you and everyone at RTH for such an amazing job you guys did on our project. It was a pleasure working with you and your team as you were all extremely professional to work with. We also appreciate how quickly you were able to complete this project & meet our deadlines. You exceeded our expectations at Smith Bowman and I look forward to working with you again in the near future. ~ Michelle Begin - Distillery Events Associate`;

let racing = `
Richmond International Raceway (RIR) recently completed a presentation in which RTH was critical in coming up with the approach, design and full assembly of the presentation on short notice. This presentation helped RIR in landing the project. The agency worked tirelessly to accomplish this difficult task. RTH exceeded our expectations and I would highly recommend them without hesitation. ~ Brandon Brown - Sr. Manager of Digital Strategy
`

let art = `
I couldn't be happier with choosing Releast The Hounds as my branding agency. From my first meeting with James to the final step of web design, the RTH team was truly amazing! They showed such care, professionalism, honesty and creativity for everything related to my brand. I still love my logo today, as much as the first day I saw it. YOU GUYS ARE THE BEST! Thank you!! ~ Cristina Harris - Owner
`


class Testimonies extends Component {
    state = { 
        testimony: richmond,
     }


    fcRichmond = () => {
        this.setState({
            testimony: richmond,
            
        })
    }

    aSmith = () => {
        this.setState({
            testimony: liquor,
           
        })
    }

    richRaceway = () => {
        this.setState({
            testimony: racing,
            
        })
    }

    artTime = () => {
        this.setState({
            testimony: art,
           
        })
    }

    prevImage = () => {
        if (this.state.testimony === richmond) {
            this.setState({testimony: art})
        }
       else if (this.state.testimony === liquor) {
            this.setState({testimony: richmond})
        }
        else if (this.state.testimony === racing) {
            this.setState({testimony: liquor})
        }
        else if (this.state.testimony === art) {
            this.setState({testimony: racing})
        }
    }

    nextImage = () => {
        if (this.state.testimony === richmond) {
            this.setState({testimony: liquor})
        }
       else if (this.state.testimony === liquor) {
            this.setState({testimony: racing})
        }
        else if (this.state.testimony === racing) {
            this.setState({testimony: art})
        }
        else if (this.state.testimony === art) {
            this.setState({testimony: richmond})
        }
    }
    

    render() { 


        return ( <Test>
            <Row className="first-row">
                <Col md={{offset:0}} lg={{offset:0}}  xl={{offset:1}}>
                <p className="title">
                    Testimonials
                </p>
                </Col>
                <Col onClick={this.prevImage} md={{offset:6}} lg={{offset:8}} xl={{offset:7}}>
                <h2 className="points">&#8592;</h2>
                </Col>
                <Col onClick={this.nextImage}>
                <h2 className="points">&#8594;</h2>
                </Col>
                
            </Row>

            <Row>
                    <Col md={{offset:0}} lg={{offset:0}}  xl={{offset:1}}>
                    <div className="line"></div>
                    </Col>
                  
                </Row>
                <Row className="second-row">
                <Col md={{offset: 0}} lg={{offset:0}} xl={{offset:1, span:1}}>
                    <p className="quote">"</p>
                    </Col>
                    <Col md={{offset: 0, span:12}} lg={{offset:0, span:11}} xl={8}>
                   
                     <p className="words">{this.state.testimony} </p>
                   
                    </Col>
                
                </Row>

                <Row className="third-row">
                <Col className="logos">
                <Image className={this.firstIcon()} onClick={this.fcRichmond} src={fc} fluid />
                </Col>
                <Col className="logos">
                <Image className={this.secondIcon()} onClick={this.aSmith} src={smith} fluid />
                </Col>
                <Col className="logos">
                <Image className={this.thirdIcon()} onClick={this.richRaceway} src={rr_logo} fluid />
                </Col>
                <Col className="logos">
                <Image className={this.fourthIcon()} onClick={this.artTime} src={arton} fluid />
                </Col>
                </Row>
        </Test> );
    }

    firstIcon() {
       let first = this.state.testimony === richmond ? "icon" : "none";
       return first;
       
     }

     secondIcon() {
        let second = this.state.testimony === liquor ? "icon" : "none";
        return second;
        
      }

      thirdIcon() {
        let third = this.state.testimony === racing ? "icon" : "none";
        return third;
        
      }

      fourthIcon() {
        let fourth = this.state.testimony === art ? "icon" : "icon4";
        return fourth;
        
      }
}
 
export default Testimonies;