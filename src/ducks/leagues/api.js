import { api } from '../util';

export const fetchLeagues = async (state, query) =>
  await api({ url: 'leagues', query }, state);

export const fetchLeague = async (state, id, query) =>
  await api({ url: `leagues/${id}`, query }, state);

export const createLeague = async (state, data) =>
  await api({ method: 'POST', url: 'leagues/create', body: data }, state);

export const joinLeague = async (state, id) =>
  await api({ url: `leagues/${id}/join` }, state);
