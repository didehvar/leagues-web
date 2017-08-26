import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import * as Style from './style';

function NavBar({ routes }) {
  return (
    <div>
      {routes
        .filter(r => r.navbar)
        .map(({ path, exact = true, navbar: NavComponent }) =>
          <Route
            key={path}
            exact={exact}
            path={path}
            component={componentProps =>
              <AppBar position="static">
                <Toolbar>
                  <Style.Container>
                    <NavComponent {...componentProps} />
                  </Style.Container>
                </Toolbar>
              </AppBar>}
          />
        )}
    </div>
  );
}

export default NavBar;
