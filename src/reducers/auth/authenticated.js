const authenticated = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
    case 'LOGIN_REQUEST':
      return false;
    case 'LOGIN_SUCCESS':
      return true;
    default:
      return state;
  }
};

export default authenticated;

export const getAuthenticated = state => state;
