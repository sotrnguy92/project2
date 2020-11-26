import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StylesProvider} from "@material-ui/styles"


import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <StylesProvider>
          <App />
      </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
