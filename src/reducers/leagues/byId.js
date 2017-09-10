const byId = (state = {}, { response }) => {
  if (response && response.entities.leagues) {
    return { ...state, ...response.entities.leagues };
  }
  return state;
};

export default byId;

export const getLeague = (state, id) => state[id];
