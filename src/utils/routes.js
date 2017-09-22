export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  settings: '/settings',

  login: '/',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: (id, slug) => `/leagues/${id || ':id'}/${id ? slug || '' : ':slug'}`
};
