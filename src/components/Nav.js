import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/green_logo.png';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './font.css';


const NavStyle = styled.div `

  .navbar .word {
color: #d8d8d8;
font-family: FrankRuhlLibre-Regular;
font-size: 18px;
letter-spacing: 1px;
padding-left: 9px;
padding-right: 9px;
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

font-size: 14px;

}

 }

 @media (max-width: 575.98px) { 
  .navbar-brand img {
      width:42px;
        height:33px;
}

.navbar .word {

font-size: 14px;

}

  }

`




const Navigation = () => {
    return ( 

  <NavStyle>
<Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
  <Navbar.Brand href="/"><img
        src={logo}
        className="d-inline-block align-top"
        alt="Release The Hounds Logo"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <NavLink className="word" smooth to="/#home">home</NavLink>
      <NavLink className="word" smooth to="/#philosophy">about</NavLink>
      <NavLink className="word" smooth to="/#portfolio">portfolio</NavLink>
      <NavLink className="word" smooth to="/#teams">the hounds</NavLink>
      <NavLink className="word" smooth to="/#contact">contact</NavLink>

    </Nav>

  </Navbar.Collapse>
</Navbar>
</NavStyle>

     );
}
 
export default Navigation;
