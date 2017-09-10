import api from '../utils/api';

export const login = code => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST', code });
  let response;

  try {
    response = await api('auth/strava/exchange', {
      method: 'POST',
      body: {
        code
      }
    });
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'LOGIN_FAILURE', code, errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'LOGIN_SUCCESS',
    code,
    token: response.data.token
  });
  return Promise.resolve();
};
