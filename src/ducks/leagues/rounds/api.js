import { api } from '../../util';

export const createRound = async (state, data) =>
  await api({ method: 'POST', url: 'rounds/create', body: data }, state);
