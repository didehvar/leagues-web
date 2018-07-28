import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import routes from '../../utils/routes';
import NavRoutes from '../Route/NavRoutes';
import Title from './Title';

import { Flex, Toolbar } from './DesktopNav.style';

class DesktopNav extends React.Component {
  render() {
    return (
      <NavRoutes>
        {render => (
          <AppBar position="sticky">
            <Toolbar>
              <Title component={Flex} variant="title" color="inherit">
                {render}
              </Title>

              <IconButton
                color="inherit"
                component={Link}
                to={routes.settings.path}
              >
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        )}
      </NavRoutes>
    );
  }
}

export default DesktopNav;
