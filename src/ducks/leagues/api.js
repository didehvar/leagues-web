import { api } from '../util';

export const fetchLeagues = async (state, query) =>
  await api({ url: 'leagues', query }, state);

export const fetchLeague = async (state, id, query) =>
  await api({ url: `leagues/${id}`, query }, state);
