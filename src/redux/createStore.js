import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import jwt from './middleware/jwt';
import rootReducer from '../ducks/reducers';
import registerSagas from '../ducks/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = history => {
  const sagaMiddleware = createSagaMiddleware();

  const store = reduxCreateStore(
    rootReducer,
    composeEnhancers(applyMiddleware(jwt, sagaMiddleware)),
  );

  registerSagas(sagaMiddleware);

  let persistor = persistStore(store);

  history.listen(location => window.impGtagPageviewgtag(location.pathname));

  return { store, persistor };
};

export default createStore;
