import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

function NavBar({ routes }) {
  return (
    <Switch>
      {routes.map(({ path, exact = true, navbar: NavComponent }) =>
        <Route
          key={path}
          exact={exact}
          path={path}
          component={props =>
            NavComponent
              ? <AppBar position="static">
                  <Toolbar>
                    <NavComponent {...props} />
                  </Toolbar>
                </AppBar>
              : <span />}
        />
      )}
    </Switch>
  );
}

export default NavBar;
