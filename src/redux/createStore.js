import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import api from './middleware/api';
import jwt from './middleware/jwt';
import rootReducer from '../reducers';

const persistedReducer = persistReducer(
  {
    key: 'impendulo',
    storage,
    whitelist: ['auth'],
  },
  rootReducer
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStore = history => {
  const store = reduxCreateStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(jwt, thunk, api(history)))
  );

  let persistor = persistStore(store);

  history.listen(function(location) {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview', location.pathname + location.search);
  });

  return { store, persistor };
};

export default createStore;
