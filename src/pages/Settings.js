import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Settings from '../components/Settings';

const SettingsPage = ({ match: { path } }) => (
  <Switch>
    <Route path={path} component={Settings} />
  </Switch>
);

export default SettingsPage;
