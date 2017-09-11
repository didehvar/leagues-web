import jwtDecode from 'jwt-decode';
import differenceInMinutes from 'date-fns/difference_in_minutes';

import { getUserToken } from '../../reducers';
import { refreshToken, logout } from '../../actions/auth';

const jwt = ({ dispatch, getState }) => next => async action => {
  if (typeof action === 'function') {
    const token = getUserToken(getState());

    if (token) {
      const expiry = jwtDecode(token).exp * 1000;
      console.log('🔫', differenceInMinutes(expiry, new Date()));

      if (expiry) {
        const diff = differenceInMinutes(expiry, new Date());

        if (diff < 1) {
          await dispatch(logout());
        } else if (diff <= 5) {
          await refreshToken(dispatch);
        }
      }
    }
  }

  return next(action);
};

export default jwt;
