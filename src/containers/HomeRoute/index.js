import React from 'react';
import { Div } from 'glamorous';

import Routes from '../../utils/routes';

import LoginButton from '../LoginButton';

function HomeRoute({ history }) {
  return (
    <Div marginTop="40vh" textAlign="center">
      <LoginButton onClick={() => history.push(Routes.newLeague)} />
    </Div>
  );
}

export default HomeRoute;
