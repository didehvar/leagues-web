import React from 'react';
import { Switch, Route } from 'react-router-dom';

import League from '../components/League';

const LeaguePage = () => (
  <Switch>
    <Route path="/" component={League} />
  </Switch>
);

export default LeaguePage;
