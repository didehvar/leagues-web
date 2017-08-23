import React from 'react';
import { Div } from 'glamorous';

import LoginButton from '../LoginButton';

function LeagueRoute() {
  return (
    <Div
      display="flex"
      flexGrow="1"
      justifyContent="center"
      alignItems="center"
    >
      <LoginButton />
    </Div>
  );
}

export default LeagueRoute;
