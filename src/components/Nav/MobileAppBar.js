import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavRoutes from '../Route/NavRoutes';

class MobileAppBar extends React.Component {
  render() {
    return (
      <NavRoutes show404={false}>
        {render => (
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {render}
              </Typography>
            </Toolbar>
          </AppBar>
        )}
      </NavRoutes>
    );
  }
}

export default MobileAppBar;
