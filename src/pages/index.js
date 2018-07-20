import Loadable from 'react-loadable';

import Loading from '../components/Loading';

export const League = Loadable({
  loader: () => import('./League'),
  loading: Loading,
});

export const Settings = Loadable({
  loader: () => import('./Settings'),
  loading: Loading,
});
