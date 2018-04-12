const total = (state = 0, action) => {
  switch (action.type) {
    case 'FETCH_LEAGUES_SUCCESS':
      return action.total;
    default:
      return state;
  }
};

export default total;

export const getTotalLeagues = state => state;
