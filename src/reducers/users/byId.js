const byId = (state = {}, { response }) => {
  if (response && response.entities.users) {
    return { ...state, ...response.entities.users };
  }
  return state;
};

export default byId;

export const getUser = (state, id) => state[id];
