const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default function api(url, config = {}) {
  return fetch(`${apiUrl}/${url}`, {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    },
    body: config.body && JSON.stringify(config.body)
  });
}
