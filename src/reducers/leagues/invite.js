const initialState = null;

const invite = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LEAGUE_INVITE_SUCCESS':
      return {
        id: action.id,
        code: action.code,
        leagueId: action.leagueId
      };
    case 'GET_LEAGUE_INVITE_FAILURE':
      return null;
    default:
      return state;
  }
};

export default invite;

export const getInvite = state => state;
