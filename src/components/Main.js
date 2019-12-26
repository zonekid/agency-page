import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Landing from './Landing';
import Philopsophy from './Philosophy';

class Main extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div>
<Landing/>
<Philopsophy/>
</div> 
         );
    }
}
 
export default Main;