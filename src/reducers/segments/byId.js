const byId = (state = {}, { response }) => {
  if (response && response.entities.segments) {
    return { ...state, ...response.entities.segments };
  }
  return state;
};

export default byId;

export const getSegment = (state, id) => state[id];
