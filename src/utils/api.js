const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const api = async (url, config = {}) => {
  const response = await fetch(`${apiUrl}/${url}`, {
    ...config,
    headers: {
      'Content-Type': 'application/json'
    },
    body: config.body && JSON.stringify(config.body)
  });

  if (response.status < 200 || response.status >= 300) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  const { data } = await response.json();
  return { data };
};

export default api;
