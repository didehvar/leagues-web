import { combineReducers } from 'redux';

import leagues from './leagues/reducer';
import users from './users/reducer';

export default combineReducers({
  leagues,
  users,
});
