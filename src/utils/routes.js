import React from 'react';
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
    navComponent: () => <span>Feed</span>,
  },

  settings: {
    path: '/settings',
    component: loadable('Settings'),
    requiredRole: config.auth.user,
    navComponent: () => <span>Settings</span>,
  },

  authStrava: {
    path: '/auth/strava',
    component: loadable('Auth/Strava'),
  },

  leagues: {
    path: '/leagues',
    component: loadable('League/Search'),
    navComponent: () => <span>Leagues</span>,
    exact: true,
  },

  league: {
    path: '/leagues/:id',
    pathWith: id => `/leagues/${id}`,
    component: loadable('League'),
    navComponent: loadable('Route/Nav/LeagueTitle'),
    exact: true,
  },

  leagueCreate: {
    path: '/leagues/create',
    component: loadable('League'),
    exact: true,
  },

  round: {
    path: '/leagues/:id/rounds/:roundId',
    pathWith: (id, roundId) => `/leagues/${id}/rounds/${roundId}`,
    component: loadable('League/Round.container'),
    navComponent: loadable('Route/Nav/LeagueTitle'),
    exact: true,
  },
};
