export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  more: '/more',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: (id, slug) => `/leagues/${id || ':id'}/${slug || ':slug'}`
};
