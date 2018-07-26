import Loadable from 'react-loadable';

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
    full: true,
  },

  feed: {
    path: '/feed',
    component: loadable('Feed'),
    private: true,
  },

  settings: {
    path: '/settings',
    component: loadable('Settings'),
    private: true,
  },

  authStrava: {
    path: '/auth/strava',
    component: loadable('Auth/Strava'),
  },

  leagues: {
    path: '/leagues',
    component: loadable('League/Search'),
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
