const token = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.token;
    default:
      return state;
  }
};

export default token;
