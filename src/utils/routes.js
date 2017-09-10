export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  settings: '/settings',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: (id, slug) => `/leagues/${id || ':id'}/${slug || ':slug'}`
};
