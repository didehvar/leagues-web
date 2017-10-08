import uniq from 'lodash/uniq';

const ids = (state = [], { response }) => {
  if (response && response.entities.users) {
    return uniq([...state, ...Object.keys(response.entities.users)]);
  }

  return state;
};

export default ids;

export const getUserIds = state => state;
