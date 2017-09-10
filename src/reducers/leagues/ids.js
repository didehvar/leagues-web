const ids = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      return action.response.result;
    default:
      return state;
  }
};

export default ids;

export const getLeagueIds = state => state;
