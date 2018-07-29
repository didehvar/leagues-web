import { api } from '../../util';

export const fetchStarredSegments = async (state, query) =>
  await api({ url: 'strava/starred', query }, state);
