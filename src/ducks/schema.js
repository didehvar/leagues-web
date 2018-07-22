import { schema } from 'normalizr';

export const round = new schema.Entity('rounds');
export const roundList = [round];

export const user = new schema.Entity('users', {
  leagues: league,
});
export const userList = [user];

export const discipline = new schema.Entity('discipline');
export const type = new schema.Entity('type');

export const league = new schema.Entity('leagues', {
  rounds: roundList,
  participants: userList,
  user,
  discipline,
  type,
});
export const leagueList = [league];

export const segment = new schema.Entity('segments');
export const segmentList = [segment];
