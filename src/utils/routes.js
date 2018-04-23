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
  league,
  leagueStandings: (id, slug) => `${league(id, slug)}/standings`
};
