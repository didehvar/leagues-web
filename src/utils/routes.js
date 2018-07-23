const league = (id, slug) =>
  `/leagues/${id || ':id'}/${id ? slug || '' : ':slug'}`;

export default {
  home: '/',
  feed: '/',

  profile: '/profile',
  settings: '/settings',

  login: '/',

  auth: '/auth',
  authStrava: '/auth/strava',

  _leagues: '/v2/leagues',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  leagueWithouSlug: '/leagues/:id',
  league,
  leagueInvite: (id, slug) => `${league(id, slug)}/invite`,
  leagueUseInvite: (id, slug, code) =>
    `${league(id, slug)}/join/${code || ':code'}`,
  leagueStandings: (id, slug) => `${league(id, slug)}/standings`,
};
