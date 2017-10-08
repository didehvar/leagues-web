import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import ids, * as fromIds from './ids';

const userReducers = combineReducers({
  byId,
  ids
});

export default userReducers;

export const getUser = (state, id) => fromById.getUser(state.byId, id);

export const getUsers = state =>
  fromIds.getUserIds(state.ids).map(id => fromById.getUser(state.byId, id));
