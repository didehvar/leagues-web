import { schema } from 'normalizr';

export const round = new schema.Entity('rounds');
export const roundList = [round];

export const user = new schema.Entity('users');
export const userList = [user];

export const league = new schema.Entity('leagues', {
  rounds: roundList,
  participants: userList
});
export const leagueList = [league];

export const segment = new schema.Entity('segments');
export const segmentList = [segment];
