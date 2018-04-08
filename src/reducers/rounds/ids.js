import uniq from 'lodash/uniq';

const initialState = [];

const ids = (state = initialState, { response, type }) => {
  if (type === 'DELETE_ROUND_SUCCESS') {
    return state.filter(id => !response.result.includes(id));
  }

  if (!response) return state;

  if (response.entities.rounds) {
    return uniq([
      ...state,
      ...Object.values(response.entities.rounds).map(r => r.id)
    ]);
  }

  if (type === 'FETCH_LEAGUE_SUCCESS') {
    return initialState;
  }

  return state;
};

export default ids;

export const getRoundIds = state => state;
