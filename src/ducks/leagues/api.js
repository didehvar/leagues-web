import { api } from '../util';

export const fetchLeagues = async (state, query) =>
  await api({ url: 'leagues', query }, state);
