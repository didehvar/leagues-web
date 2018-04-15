const search = (state = '', action) => {
  switch (action.type) {
    case 'SET_LEAGUES_SEARCH':
      return action.search;
    default:
      return state;
  }
};

export default search;

export const getSearch = state => state;
