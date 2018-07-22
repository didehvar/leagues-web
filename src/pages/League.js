import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Loading from '../components/Loading';

const League = Loadable({
  loader: () => import('../components/League'),
  loading: Loading,
});

const LeaguePage = ({ match: { path }, location: { pathname } }) => (
  <Switch>
    <Route path={`${path}/:id`} component={League} />
  </Switch>
);

export default LeaguePage;
