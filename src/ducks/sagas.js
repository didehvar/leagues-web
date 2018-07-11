import * as leagues from './leagues/sagas';

const sagas = {
  ...leagues,
};

export default function registerSagas(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}
