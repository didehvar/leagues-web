import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import ids, * as fromIds from './ids';

const roundReducers = combineReducers({
  byId,
  ids
});

export default roundReducers;

export const getRound = (state, id) => fromById.getRound(state.byId, id);

export const getRounds = state =>
  fromIds.getRoundIds(state.ids).map(id => fromById.getRound(state.byId, id));
