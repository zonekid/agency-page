import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Hounds from './components/Hounds';
import Navigation from './components/Nav';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <React.Fragment>
        <Container fluid>
        <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/portfolio" component={Portfolio}/>
   <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/>
   <Route path="/hounds" component={Hounds}/>
           
          </Switch>
        </Router>
        </Container>
      </React.Fragment>
      
    </div>
  );
}

export default App;
