export default {
  home: '/',
  login: '/',

  feed: '/feed',

  auth: '/auth',
  authStrava: '/auth/strava',

  leagues: '/leagues',
  leaguesCreate: '/leagues/create',
  league: '/leagues/:id',
  toLeague: id => `/leagues/${id}`,
  leagueRound: '/leagues/:id/rounds/:roundId',
  toLeagueRound: (leagueId, roundId) =>
    `/leagues/${leagueId}/rounds/${roundId}`,

  settings: '/settings',

  test: '/test',
};
