import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import ids, * as fromIds from './ids';

const leagueReducers = combineReducers({
  byId,
  ids
});

export default leagueReducers;

export const getLeague = (state, id) => fromById.getLeague(state.byId, id);

export const getLeauges = state =>
  fromIds.getLeagueIds(state.ids).map(id => fromById.getLeague(state.byId, id));
