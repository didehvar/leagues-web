import React from 'react';

import Routes from '../../utils/routes';

import CreateLeagueForm from '../../components/CreateLeagueForm';

function CreateLeagueRoute({ history }) {
  return <CreateLeagueForm onSubmit={() => history.push(Routes.league(1))} />;
}

export default CreateLeagueRoute;
