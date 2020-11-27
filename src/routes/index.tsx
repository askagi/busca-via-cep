import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Address from '../pages/Address';
import Cep from '../pages/cep';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/address" component={Address} />
    <Route path="/cep" component={Cep} />
  </Switch>
);

export default Routes;
