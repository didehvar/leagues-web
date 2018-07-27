import Loadable from 'react-loadable';

import config from './config';
import Loading from '../components/UI/Loading';

const loadable = (path, delay = 200) =>
  Loadable({
    loader: () => import(`../components/${path}`),
    loading: Loading,
    delay,
  });

export default {
  home: {
    path: '/',
    component: loadable('Home', 500),
    exact: true,
    fullPage: true,
  },

  feed: {
    path: '/feed',
    component: loadable('Feed'),
    requiredRole: config.auth.user,
    navTitle: 'Feed',
  },

  settings: {
    path: '/settings',
    component: loadable('Settings'),
    requiredRole: config.auth.user,
    navTitle: 'Settings',
  },

  authStrava: {
    path: '/auth/strava',
    component: loadable('Auth/Strava'),
  },

  leagues: {
    path: '/leagues',
    component: loadable('League/Search'),
    navTitle: 'Leagues',
  },

  league: {
    path: '/leagues/:id',
    pathWith: id => `/leagues/${id}`,
    component: loadable('League'),
  },

  leagueCreate: {
    path: '/leagues/create',
    component: loadable('League'),
  },

  round: {
    path: '/leagues/:id/rounds/:roundId',
    pathWith: (id, roundId) => `/leagues/${id}/rounds/${roundId}`,
    component: loadable('League'),
  },
};
