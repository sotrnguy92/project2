import logo from './logo.svg';

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './components/Landing'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Route exact path ='/' component={SignIn}/>
      <Route exact path ='/signup' component={SignUp}/>
    </Router>
  );
}

export default App;
