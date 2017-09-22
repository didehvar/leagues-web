import api from '../utils/api';

export const login = code => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST', code });
  let response;

  try {
    response = await dispatch(
      api('auth/strava/exchange', {
        method: 'POST',
        body: {
          code
        }
      })
    );
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'LOGIN_FAILURE', code, errorMessage });
    return Promise.reject(errorMessage);
  }

  dispatch({
    type: 'LOGIN_SUCCESS',
    code,
    token: response.data.token,
    user: response.data.user
  });
  return Promise.resolve();
};

export const logout = () => ({
  type: 'LOGOUT_SUCCESS'
});

export const refreshToken = async dispatch => {
  dispatch({ type: 'REFRESH_TOKEN_REQUEST' });
  let response;

  try {
    console.log('🍻');
    response = await dispatch(api('auth/token/refresh'));
    console.log('👌', response);
  } catch (ex) {
    const errorMessage = ex.message;
    dispatch({ type: 'REFRESH_TOKEN_FAILURE', errorMessage });
    return Promise.reject(errorMessage);
  }

  console.log('😱', response);
  dispatch({
    type: 'REFRESH_TOKEN_SUCCESS',
    token: response.data.token
  });
  return Promise.resolve();
};