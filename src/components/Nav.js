import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/green_logo.png';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';


const NavStyle = styled.div `

  .navbar .word {
color: #ffffff;
font-family: FrankRuhlLibre-Regular;
font-size: 18px;
letter-spacing: 1px;
}

.navbar-brand {
margin-top: -12px;
}
.navbar-brand img {
        width:112px;
        height:82px;
}

@media (max-width: 1199.98px) { 


.navbar-brand img {
        width:112px;
        height:82px;
}

}

@media (max-width: 991.98px) { 
  .navbar-brand img {
        width:80px;
        height:58px;
}


 }

 @media (max-width: 767.98px) {
  .navbar-brand img {
      width:40px;
        height:29px;
}

.navbar-brand {
margin-top: -24px;
}

.navbar .word {

font-size: 11px;

}

 }

 @media (max-width: 575.98px) { 
  .navbar-brand img {
      width:32px;
        height:23px;
}

.navbar .word {

font-size: 8px;

}

  }

`




const Navigation = () => {
    return ( 

  <NavStyle>
<Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
  <Navbar.Brand href="#home"><img
        src={logo}
        className="d-inline-block align-top"
        alt="Release The Hounds Logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link className="word" href="#main">home</Nav.Link>
      <Nav.Link className="word" href="#features">about</Nav.Link>
      <Nav.Link className="word" href="#pricing">portfolio</Nav.Link>
      <Nav.Link className="word" href="#pricing">the hounds</Nav.Link>
      <Nav.Link className="word" href="#pricing">contact</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
</NavStyle>

     );
}
 
export default Navigation;
