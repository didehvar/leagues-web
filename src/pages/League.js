import React from 'react';
import { Switch, Route } from 'react-router-dom';

import League from '../components/League';
import LeagueAppBar from '../components/League/AppBar';

const LeaguePage = () => [
  <LeagueAppBar />,
  <Switch>
    <Route path="/" component={League} />
  </Switch>,
];

export default LeaguePage;
