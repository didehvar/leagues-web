import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import api from './middleware/api';
import jwt from './middleware/jwt';
import rootReducer from '../reducers';
import registerSagas from '../ducks/sagas';

const persistedReducer = persistReducer(
  {
    key: 'impendulo',
    storage,
    whitelist: ['auth', 'ducks'],
  },
  rootReducer,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = history => {
  const sagaMiddleware = createSagaMiddleware();

  const store = reduxCreateStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(jwt, thunk, sagaMiddleware, api(history))),
  );

  registerSagas(sagaMiddleware);

  let persistor = persistStore(store);

  history.listen(location => window.impGtagPageviewgtag(location.pathname));

  return { store, persistor };
};

export default createStore;
