const error = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_LEAGUE_FAILURE':
      return action.errorMessage;
    case 'CREATE_LEAGUE_REQUEST':
    case 'CREATE_LEAGUE_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default error;

export const getErrorMessage = state => state;
