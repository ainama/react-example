import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './docs/nav';
import './sass/index.scss';
import Demo01 from '../demo01/index.js';
import Demo02 from '../demo02/index.js';

class ElementClass extends React.Component {
  render() {
    return (
      <Router>
        <Nav>
          <Route exact path = '/' component = { Demo01 } />
          <Route exact path = '/demo01' component = { Demo01 } />
          <Route exact path = '/demo02' component = { Demo02 } />
        </Nav>
      </Router>
    );
  }
};

ReactDOM.render(
  <ElementClass />,
  document.getElementById('root')
);
