import React from 'react';
import { Div } from 'glamorous';

import LoginButton from '../LoginButton';

function HomeRoute() {
  return (
    <Div marginTop="45vh" textAlign="center">
      <LoginButton />
    </Div>
  );
}

export default HomeRoute;
