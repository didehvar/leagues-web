import React from 'react';
import { Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

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
            component={props =>
              <AppBar position="static">
                <Toolbar>
                  <NavComponent {...props} />
                </Toolbar>
              </AppBar>}
          />
        )}
    </div>
  );
}

export default NavBar;
