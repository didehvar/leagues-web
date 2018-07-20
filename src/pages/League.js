import React from 'react';
import { Switch, Route } from 'react-router-dom';

import League from '../components/League';

const LeaguePage = ({ match: { path } }) => (
  <Switch>
    <Route path={`${path}/:id`} component={League} />
  </Switch>
);

export default LeaguePage;
