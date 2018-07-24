import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/UI/Loading';

const Settings = Loadable({
  loader: () => import('../components/Settings'),
  loading: Loading,
});

const SettingsPage = () => (
  <Switch>
    <Route path={routes.settings} component={Settings} />
  </Switch>
);

export default SettingsPage;
