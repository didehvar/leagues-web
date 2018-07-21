import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import League from '../components/League';

const LeaguePage = ({ match: { path }, location: { pathname } }) => (
  <Switch>
    <Route path={`${path}/:id`} component={League} />
  </Switch>
);

export default LeaguePage;
