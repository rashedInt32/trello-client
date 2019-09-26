import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Boards from '../pages/Boards';
import SingleBoard from '../pages/SingleBoard';

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/board/:id" component={SingleBoard} />
        <Route path="/" component={Boards} />
      </Switch>
    </Router>
  );
}

export default RouterComponent;
