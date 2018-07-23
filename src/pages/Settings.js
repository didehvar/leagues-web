import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Loading from '../components/UI/Loading';

const Settings = Loadable({
  loader: () => import('../components/Settings'),
  loading: Loading,
});

const SettingsPage = ({ match: { path } }) => (
  <Switch>
    <Route path={path} component={Settings} />
  </Switch>
);

export default SettingsPage;
