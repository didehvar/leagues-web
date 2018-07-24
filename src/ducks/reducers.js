import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import leagues from './leagues/reducer';
import users from './users/reducer';

const usersPersistConfig = {
  key: 'current',
  storage: storage,
};

export default combineReducers({
  leagues,
  users: persistReducer(usersPersistConfig, users),
});
