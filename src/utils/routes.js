export default {
  home: '/',
  search: '/search',
  profile: '/profile',
  more: '/more',

  leagues: '/leagues',
  newLeague: '/leagues/new',
  league: id => `/leagues/${id || ':leagueId'}`,
  leagueSegments: '/leagues/:leagueId/segments',
  newLeagueSegment: '/leagues/:leagueId/segments/new'
};
