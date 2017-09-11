import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
import starredIds, * as fromStarredIds from './starredIds';

const segmentReducers = combineReducers({
  byId,
  starredIds
});

export default segmentReducers;

export const getSegment = (state, id) => fromById.getSegment(state.byId, id);

export const getStarredSegments = state =>
  fromStarredIds
    .getSegmentIds(state.starredIds)
    .map(id => fromById.getSegment(state.byId, id));
