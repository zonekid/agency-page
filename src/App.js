import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonies from './components/Testimonies';
import Navigation from './components/Nav';
import Container from 'react-bootstrap/Container';
import Philosophy from './components/Philosophy';
import Teams from './components/Teams';
import Pollak from './components/Pollak';
import Eagle from './components/Eagle';
import Soundview from './components/Soundview';
import Yoga from './components/Yoga';
import Better from './components/Better';
import Westrock from './components/Westrock';
import {Nomatch} from './components/Nomatch';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <div>
      <React.Fragment>
        <Container fluid>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
  
  <Route path="/contact" component={Contact}/>
   <Route path="/testimonies" component={Testimonies}/>
   <Route path="/philosophy" component={Philosophy}/>
   <Route path="/team" component={Teams}/>
   <Route path="/pollak" component={Pollak}/>
   <Route path="/eagle" component={Eagle}/>
   <Route path="/soundview" component={Soundview}/>
   <Route path="/yoga" component={Yoga}/>
   <Route path="/better" component={Better}/>
   <Route path="/westrock" component={Westrock}/>
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
