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

  auth: {
    path: '/auth',
    routes: {
      strava: {
        path: '/auth/strava',
        component: loadable('Auth/Strava'),
      },
    },
  },

  leagues: {
    path: '/leagues',
    component: loadable('League/Search'),
    routes: {
      view: {
        path: '/leagues/:id',
        pathWith: id => `/leagues/${id}`,
        component: loadable('League'),
        routes: {
          round: {
            path: '/leagues/:id/rounds/:roundId',
            pathWith: (id, roundId) => `/leagues/${id}/rounds/${roundId}`,
            component: loadable('League'),
          },
        },
      },

      create: {
        path: '/leagues/create',
        component: loadable('League'),
      },
    },
  },
};
