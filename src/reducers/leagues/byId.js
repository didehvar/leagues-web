const byId = (state = {}, { response, type, id, userId }) => {
  if (response && response.entities.leagues) {
    return { ...state, ...response.entities.leagues };
  }

  const league = state[id];

  switch (type) {
    case 'JOIN_LEAGUE_SUCCESS':
    case 'USE_LEAGUE_INVITE_SUCCESS':
      if (league) {
        return {
          ...state,
          [id]: {
            ...league,
            participants: league.participants.concat(userId)
          }
        };
      }
      return state;
    case 'LEAVE_LEAGUE_SUCCESS':
      if (league) {
        return {
          ...state,
          [id]: {
            ...league,
            participants: league.participants.filter(p => p !== userId)
          }
        };
      }
      return state;
    default:
      return state;
  }
};

export default byId;

export const getLeague = (state, id) => state[id];

export const getLeagues = state => Object.values(state);
