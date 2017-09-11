const token = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
    case 'LOGIN_REQUEST':
    case 'LOGOUT_SUCCESS':
    case 'REFRESH_TOKEN_FAILURE':
      return null;
    case 'LOGIN_SUCCESS':
    case 'REFRESH_TOKEN_SUCCESS':
      return action.token;
    default:
      return state;
  }
};

export default token;

export const getToken = state => state;
