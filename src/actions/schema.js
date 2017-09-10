import { schema } from 'normalizr';

export const league = new schema.Entity('leagues');
export const leagueList = [league];

export const segment = new schema.Entity('segments');
export const segmentList = [segment];
