import * as leagues from './leagues/sagas';
import * as users from './users/sagas';

const sagas = {
  ...leagues,
  ...users,
};

export default function registerSagas(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
