const leagueSlug = slug => slug || ':leagueSlug';

export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  more: '/more',

  // ----- Leagues -----
  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: slug => `/leagues/${leagueSlug(slug)}`
};
