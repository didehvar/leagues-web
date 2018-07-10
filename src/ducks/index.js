import { combineReducers } from 'redux';

import leagues, { sagas as leagueSagas } from './leagues';

export function registerSagas(middleware) {
  const sagas = {
    ...leagueSagas,
  };

  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}

export default combineReducers({
  leagues,
});
