import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import error, * as fromError from './error';
import id, * as fromId from './id';
import ids, * as fromIds from './ids';
import total, * as fromTotal from './total';
import search, * as fromSearch from './search';

const leagueReducers = combineReducers({
  byId,
  error,
  id,
  ids,
  total,
  search
});

export default leagueReducers;

export const getLeague = (state, id) => fromById.getLeague(state.byId, id);

export const getAllLeagues = state => fromById.getLeagues(state.byId);

export const getLeauges = state => {
  return getLeagueSearch(state)
    ? fromIds
        .getLeagueIds(state.ids)
        .map(id => fromById.getLeague(state.byId, id))
    : getAllLeagues(state);
};

export const getError = state => fromError.getErrorMessage(state.error);

export const getCurrentLeagueId = state => fromId.getLeagueId(state.id);

export const getCurrentLeague = state =>
  fromById.getLeague(state.byId, getCurrentLeagueId(state));

export const getTotalLeagues = state => fromTotal.getTotalLeagues(state.total);

export const getLeagueSearch = state => fromSearch.getSearch(state.search);
