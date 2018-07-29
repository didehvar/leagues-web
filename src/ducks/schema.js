import { schema } from 'normalizr';

export const role = new schema.Entity('roles');

export const user = new schema.Entity('users', {
  role,
});
export const users = [user];

export const point = new schema.Entity('points', {
  user,
});
export const points = [point];

export const starredSegment = new schema.Entity('starredSegments');
export const starredSegments = [new schema.Entity('starredSegments')];

export const segment = new schema.Entity('segments');

export const round = new schema.Entity('rounds', {
  points,
  segment,
});
export const rounds = [round];

export const discipline = new schema.Entity('disciplines');
export const type = new schema.Entity('types');

export const league = new schema.Entity('leagues', {
  rounds,
  points,
  participants: users,
  user,
  discipline,
  type,
});
export const leagueList = [league];
