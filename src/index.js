import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
// this is a RELATIVE import
import './index.css';
// We also have the line import './index.css', 
// which is enabled by webpack. 
import App from './paltrows-power-toes/App';
import { BrowserRouter } from "react-router-dom";

{/*ReactDOM.render(<App />, document.getElementById('root'));*/}
// for ids only -  achieves the same result as 
// document.querySelector('#root')

ReactDOM.render(
      <BrowserRouter>
       <App />
     </BrowserRouter>,
       document.getElementById('root')
     );