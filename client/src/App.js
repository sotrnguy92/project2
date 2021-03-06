
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import HeadBar from './components/HeadBar'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TodoView from "./components/TodoView";

import {UserListView} from "./components/AllUsers"
import SingleUserTodoView from "./components/SingleUserTodoView";

function App() {
  return (
    <Router>
        <HeadBar/>
      <Route exact path ='/' component={SignIn}/>
      <Route exact path ='/signup' component={SignUp}/>
      <Route exact path ='/todos' component={TodoView}/>
      <Route exact path = '/users' component={UserListView}/>
      <Route exact path = '/users/user/:userId' component={SingleUserTodoView}/>
    </Router>
  );
}

export default App;
