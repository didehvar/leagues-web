import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Settings from '../components/Settings';

const SettingsPage = () => (
  <Switch>
    <Route path="/" component={Settings} />
  </Switch>
);

export default SettingsPage;
