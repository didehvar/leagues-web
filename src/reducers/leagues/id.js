const id = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_LEAGUE_SUCCESS':
    case 'FETCH_LEAGUE_SUCCESS':
      return action.response.result;
    default:
      return state;
  }
};

export default id;

export const getLeagueId = state => state;
