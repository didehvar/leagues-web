const byId = (state = {}, { response }) => {
  if (response && response.entities.rounds) {
    return { ...state, ...response.entities.rounds };
  }
  return state;
};

export default byId;

export const getRound = (state, id) => state[id];
