import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/UI/Loading';

const League = Loadable({
  loader: () => import('../components/League'),
  loading: Loading,
});

const Search = Loadable({
  loader: () => import('../components/League/Search'),
  loading: Loading,
});

const LeaguePage = () => (
  <Switch>
    <Route exact path={routes.leagues} component={Search} />
    <Route path={routes.league} component={League} />
    <Route path={routes.leaguesCreate} component={League} />
  </Switch>
);

export default LeaguePage;
