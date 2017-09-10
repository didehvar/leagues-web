const token = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.token;
    case 'LOGOUT_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default token;

export const getToken = state => state;
