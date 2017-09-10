const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_FAILURE':
    case 'LOGIN_REQUEST':
    case 'LOGOUT_SUCCESS':
      return {};
    case 'LOGIN_SUCCESS':
      return action.user;
    default:
      return state;
  }
};

export default user;

export const getUser = state => state;
