export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  more: '/more',

  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: id => `/leagues/${id || ':leagueId'}`,
  leagueSegments: id => `/leagues/${id || ':leagueId'}/segments`,
  newLeagueSegment: id => `/leagues/${id || ':leagueId'}/segments/new`
};
