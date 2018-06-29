import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import ids, * as fromIds from './ids';
import error, * as fromError from './error';

const roundReducers = combineReducers({
  byId,
  ids,
  error
});

export default roundReducers;

export const getRound = (state, id) => fromById.getRound(state.byId, id);

export const getRounds = state =>
  fromIds.getRoundIds(state.ids).map(id => fromById.getRound(state.byId, id));

export const getError = state => fromError.getErrorMessage(state.error);
