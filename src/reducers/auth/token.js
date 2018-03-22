import { REHYDRATE } from 'redux-persist/constants';
import jwtDecode from 'jwt-decode';
import isBefore from 'date-fns/is_before';

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
      const token = ((action.payload || {}).auth || {}).token;
      return token && isBefore(new Date(), jwtDecode(token).exp * 1000)
        ? token
        : state;
    default:
      return state;
  }
};

export default token;

export const getToken = state => state;
