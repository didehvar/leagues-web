import React from 'react';
import { Div } from 'glamorous';

import Button from '../../components/Button';

function HomeRoute() {
  return (
    <Div
      display="flex"
      flexGrow="1"
      justifyContent="center"
      alignItems="center"
    >
      <Button raised color="primary">
        Login
      </Button>
    </Div>
  );
}

export default HomeRoute;
