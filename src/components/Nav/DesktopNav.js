import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import routes from '../../utils/routes';
import NavRoutes from '../Route/NavRoutes';

import { Flex, Toolbar } from './DesktopNav.style';

class DesktopNav extends React.Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography component={Flex} variant="title" color="inherit">
            <NavRoutes />
          </Typography>

          <IconButton
            color="inherit"
            component={Link}
            to={routes.settings.path}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default DesktopNav;
