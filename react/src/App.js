import React from 'react';
import './App.css';

/* Components */
import Presentational from './components/Presentational';
import Stateless from './components/Stateless';
import Stateful from './components/Stateful';
import StyledComponent from './components/StyledComponent';

/* Component with Styled Component */

const App = () => (
  <div>
    <Presentational></Presentational>
    <Stateless></Stateless>
    <Stateful></Stateful>
    <StyledComponent></StyledComponent>
  </div>
)
export default App;
