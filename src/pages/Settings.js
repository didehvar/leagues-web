import React from 'react';
import Loadable from 'react-loadable';

import Loading from '../components/UI/Loading';

const Settings = Loadable({
  loader: () => import('../components/Settings'),
  loading: Loading,
});

const SettingsPage = ({ ...props }) => <Settings {...props} />;

export default SettingsPage;
