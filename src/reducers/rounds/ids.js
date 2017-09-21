import uniq from 'lodash/uniq';

const ids = (state = [], { response }) => {
  if (response && response.entities.rounds) {
    return uniq([...state, ...Object.keys(response.entities.rounds)]);
  }

  return state;
};

export default ids;

export const getRoundIds = state => state;
