import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import api from './middleware/api';
import jwt from './middleware/jwt';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStore = history => {
  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(jwt, thunk, api(history)))
  );

  persistStore(store, { whitelist: ['auth'] });

  return store;
};

export default createStore;
