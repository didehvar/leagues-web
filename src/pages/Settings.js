import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Settings from '../components/Settings';

const SettingsPage = () => (
  <Switch>
    <Route path="/" component={Settings} />
  </Switch>
);

export default SettingsPage;
