import { getUserToken } from '../reducers';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const api = async (url, state = {}, options = {}) => {
  const token = getUserToken(state);

  const response = await fetch(`${apiUrl}/1.1/${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
      ...options.headers,
    },
    body: options.body && JSON.stringify(options.body),
  });

  return await response.json();
};
