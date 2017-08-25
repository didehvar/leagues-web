import React from 'react';
import { Route } from 'react-router-dom';

import * as Style from './style';

function PaddedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        <Style.Container>
          <Component {...props} />
        </Style.Container>}
    />
  );
}

export default PaddedRoute;
