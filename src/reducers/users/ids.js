import uniq from 'lodash/uniq';

const ids = (state = [], { response }) => {
  if (response && response.entities.users) {
    return uniq([
      ...state,
      ...Object.values(response.entities.users).map(u => u.id)
    ]);
  }

  return state;
};

export default ids;

export const getUserIds = state => state;
