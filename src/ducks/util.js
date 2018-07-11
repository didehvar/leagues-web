import { stringify } from 'querystring';
import { getUserToken } from '../reducers';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const api = async ({ url, query, method = 'GET', body }, state = {}) => {
  const token = getUserToken(state);

  const response = await fetch(`${apiUrl}/1.1/${url}?${stringify(query)}`, {
    method: method,
    body: body && JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
    },
  });

  const { data } = await response.json();
  return data;
};
