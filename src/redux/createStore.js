import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import jwt from './middleware/jwt';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStore = () => {
  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(jwt, thunk), autoRehydrate())
  );

  persistStore(store, { whitelist: ['auth'] });

  return store;
};

export default createStore;
