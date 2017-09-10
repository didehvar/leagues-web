import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStore = () =>
  reduxCreateStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default createStore;
