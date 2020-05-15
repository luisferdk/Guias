import React from 'react';
import './App.css';

/* Components */
import Presentational from './components/Presentational';
import Stateless from './components/Stateless';
import Stateful from './components/Stateful';
import StyledComponent from './components/StyledComponent';
import Router from './components/Router';
import Hooks from './components/Hooks';

/* Component with Styled Component */

const App = () => (
  <div>
    <Presentational></Presentational>
    <Stateless></Stateless>
    <Stateful></Stateful>
    <StyledComponent></StyledComponent>
    <h1>Router</h1>
    <Router></Router>
    <Hooks></Hooks>
  </div>
)
export default App;