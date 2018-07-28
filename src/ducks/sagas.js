import leagues from './leagues/sagas';
import rounds from './leagues/rounds/sagas';
import segments from './leagues/segments/sagas';
import users from './users/sagas';

const sagas = {
  leagues,
  rounds,
  segments,

  users,
};

export default function registerSagas(middleware) {
  for (const name in sagas) {
    middleware.run(sagas[name]);
  }
}
