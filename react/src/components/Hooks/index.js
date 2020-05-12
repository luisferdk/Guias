import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import UseState from './UseState';
import UseEffect from './UseEffect';
import UseReducer from './UseReducer';
import UseContext from './UseContext';

export default function Hooks() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/UseState'>UseState</Link>
          </li>
          <li>
            <Link to='/UseEffect'>UseEffect</Link>
          </li>
          <li>
            <Link to='/UseReducer'>UseReducer</Link>
          </li>
          <li>
            <Link to='/UseContext'>UseContext</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/UseState'>
            <UseState />
          </Route>
          <Route path='/UseEffect'>
            <UseEffect />
          </Route>
          <Route path='/UseReducer'>
            <UseReducer />
          </Route>
          <Route path='/UseContext'>
            <UseContext />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
