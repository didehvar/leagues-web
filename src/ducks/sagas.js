import leagues from './leagues/sagas';
import users from './users/sagas';

const sagas = {
  leagues,
  users,
};

export default function registerSagas(middleware) {
  for (const name in sagas) {
    middleware.run(sagas[name]);
  }
}
