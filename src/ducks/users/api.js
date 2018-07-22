import { api } from '../util';

export const login = async (state, code) =>
  await api(
    { method: 'POST', url: 'auth/strava/exchange', body: { code } },
    state,
  );
