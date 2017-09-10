const error = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
      return action.message;
    case 'LOGIN_REQUEST':
    case 'LOGIN_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default error;

export const getErrorMessage = state => state;
