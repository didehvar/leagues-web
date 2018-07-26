import { schema } from 'normalizr';

export const round = new schema.Entity('rounds');
export const rounds = [round];

export const role = new schema.Entity('role');

export const user = new schema.Entity('users', {
  role,
});
export const users = [user];

export const discipline = new schema.Entity('discipline');
export const type = new schema.Entity('type');

export const point = new schema.Entity('points', {
  user,
});
export const points = [point];

export const league = new schema.Entity('leagues', {
  rounds,
  points,
  participants: users,
  user,
  discipline,
  type,
});
export const leagueList = [league];

export const segment = new schema.Entity('segments');
export const segments = [segment];
