import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import NavRoutes from '../Route/NavRoutes';
import Title from './Title';

class MobileAppBar extends React.Component {
  render() {
    return (
      <NavRoutes show404={false}>
        {render => (
          <AppBar position="sticky">
            <Toolbar>
              <Title variant="title" color="inherit">
                {render}
              </Title>
            </Toolbar>
          </AppBar>
        )}
      </NavRoutes>
    );
  }
}

export default MobileAppBar;
