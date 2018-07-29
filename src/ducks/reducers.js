import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import leagues from './leagues/reducer';
import users from './users/reducer';

const usersPersistConfig = {
  key: 'impendulo.users',
  storage: storage,
  whitelist: ['current', 'rolesById'],
};

export default combineReducers({
  leagues,
  users: persistReducer(usersPersistConfig, users),
});
