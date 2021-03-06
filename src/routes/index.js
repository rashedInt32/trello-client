import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getUser } from "../utils/localStorage";

import Header from "../components/Header";

import Login from '../pages/Login';
import Register from '../pages/Register';
import Boards from '../pages/Boards';
import SingleBoard from '../pages/SingleBoard';
import Profile from "../pages/Profile";

function RouterComponent() {
  const user = getUser();
  return (
    <Router>
      <Header user={user}/>
      <Switch>
        <Route path="/" exact component={Boards} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/board/:id" component={SingleBoard} />
      </Switch>
    </Router>
  );
}

export default RouterComponent;
