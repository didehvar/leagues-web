const error = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_ROUND_FAILURE':
      return action.message;
    case 'CREATE_ROUND_REQUEST':
    case 'CREATE_ROUND_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default error;

export const getErrorMessage = state => state;
