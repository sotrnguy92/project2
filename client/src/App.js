
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HeadBar from './components/HeadBar'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TodoView from "./components/TodoView";
// import {WrappedTodoView} from './components/TodoView'
// import {WrappedSignIn} from './components/testSignIn'
import {UserListView} from "./components/AllUsers"

function App() {
  return (
    <Router>
        <HeadBar/>
      <Route exact path ='/' component={SignIn}/>
      <Route exact path ='/signup' component={SignUp}/>
      <Route exact path ='/todos' component={TodoView}/>
      <Route exact path = '/users' component={UserListView}/>
    </Router>
  );
}

export default App;
