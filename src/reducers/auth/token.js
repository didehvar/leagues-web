import { REHYDRATE } from 'redux-persist/constants';

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
    case REHYDRATE:
      return action.payload.auth.token || state;
    default:
      return state;
  }
};

export default token;

export const getToken = state => state;
