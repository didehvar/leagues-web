import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/Loading';

const Strava = Loadable({
  loader: () => import('../components/Auth/Strava'),
  loading: Loading,
});

const AuthPage = ({ match: { path } }) => (
  <Switch>
    <Route path={routes.authStrava} component={Strava} />
  </Switch>
);

export default AuthPage;
