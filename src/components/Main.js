import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Landing from './Landing';
import Philopsophy from './Philosophy';
import Portfolio from './Portfolio';
import Testimonies from './Testimonies';
import Teams from './Teams';
import Contact from './Contact'
import './font.css';


class Main extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div>
                <div id="home">
<Landing/>
</div>
<div id="philosophy">
<Philopsophy/>
</div>
<div id="portfolio">
<Portfolio/>
</div>
<div id="testimonies">
<Testimonies/>
</div>
<div id="teams">
<Teams/>
</div>
<div id="contact">
<Contact/>
</div>
</div> 
         );
    }
}
 
export default Main;