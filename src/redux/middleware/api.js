import merge from 'lodash/merge';

import Routes from '../../utils/routes';
import { getUserToken } from '../../reducers';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const api = history => ({ dispatch, getState }) => next => async action => {
  const { type, url, options = {} } = action;
  if (type !== 'API_CALL') return next(action);

  const state = getState();
  const token = getUserToken(state);
  const response = await fetch(
    `${apiUrl}/${url}`,
    merge(
      {},
      options,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token && `Bearer ${token}`
        }
      },
      { body: options.body && JSON.stringify(options.body) }
    )
  );

  if (response.status < 200 || response.status >= 300) {
    if (response.status === 401) {
      history.push(Routes.login);
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  const { data } = await response.json();
  return { data };
};

export default api;
