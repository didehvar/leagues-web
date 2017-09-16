const ids = (state = [], { response }) => {
  if (response && response.entities.rounds) {
    return Object.keys(response.entities.rounds);
  }

  return state;
};

export default ids;

export const getRoundIds = state => state;
