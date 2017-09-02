import React from 'react';
import { Div } from 'glamorous';

import LoginButton from '../LoginButton';

function HomeRoute({ history }) {
  return (
    <Div marginTop="40vh" textAlign="center">
      <LoginButton />
    </Div>
  );
}

export default HomeRoute;
