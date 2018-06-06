const league = (id, slug) =>
  `/leagues/${id || ':id'}/${id ? slug || '' : ':slug'}`;

export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  settings: '/settings',

  login: '/',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  leagueWithouSlug: '/leagues/:id',
  league,
  leagueInvite: (id, slug) => `${league(id, slug)}/invite`,
  leagueUseInvite: (id, slug, code) =>
    `${league(id, slug)}/join/${code || ':code'}`,
  leagueStandings: (id, slug) => `${league(id, slug)}/standings`
};
