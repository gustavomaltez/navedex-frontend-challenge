import React from 'react';
import { Switch } from 'react-router-dom';
import AddNaver from '../pages/AddNaver';
import EditNaver from '../pages/EditNaver';
import Home from '../pages/Home';
import Login from '../pages/Login';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} isPrivate />
      <Route exact path="/edit-naver/:id" component={EditNaver} isPrivate />
      <Route exact path="/add-naver" component={AddNaver} isPrivate />
    </Switch>
  );
};

export default Routes;
