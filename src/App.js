import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Testimonies from './components/Testimonies';
import Hounds from './components/Hounds';
import Navigation from './components/Nav';
import Container from 'react-bootstrap/Container';
import Philosophy from './components/Philosophy';
import Teams from './components/Teams';
import {Nomatch} from './components/Nomatch';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <div>
      <React.Fragment>
        <Container fluid>
        <Router>
          <ScrollToTop>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
   <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
   <Route path="/hounds" component={Hounds}/>
   <Route path="/testimonies" component={Testimonies}/>
   <Route path="/philosophy" component={Philosophy}/>
   <Route path="/team" component={Teams}/>
   <Route component={Nomatch}/>         
          </Switch>
          </ScrollToTop>
        </Router>
        </Container>
      </React.Fragment>
      
    </div>
  );
}

export default App;
