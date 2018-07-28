import React from 'react';
import Link from 'react-router-dom/Link';
import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/icons/Menu';
import Group from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';
import SettingsRounded from '@material-ui/icons/SettingsRounded';

import routes from '../../utils/routes';
import NavRoutes from '../Route/NavRoutes';

import {
  Flex,
  Toolbar,
  IconButonMenu,
  Title,
  Actions,
  List,
  ListItem,
} from './AppBar.style';

class AppBar extends React.Component {
  state = { drawerOpen: false };

  toggleDrawer = () =>
    this.setState(prevState => ({ drawerOpen: !prevState.drawerOpen }));

  render() {
    const { drawerOpen } = this.state;
    const { pathname } = this.props;

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    return (
      <React.Fragment>
        <NavRoutes>
          {render => (
            <MuiAppBar position="sticky">
              <Toolbar>
                <IconButonMenu
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.toggleDrawer}
                >
                  <Menu />
                </IconButonMenu>

                <Title component={Flex} variant="title" color="inherit" noWrap>
                  {render}
                </Title>

                <Actions>
                  <IconButton
                    color="inherit"
                    component={Link}
                    to={routes.settings.path}
                  >
                    <AccountCircle />
                  </IconButton>
                </Actions>
              </Toolbar>
            </MuiAppBar>
          )}
        </NavRoutes>

        <SwipeableDrawer
          open={drawerOpen}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <List component="nav">
              <ListItem
                button
                active={pathname === routes.feed.path}
                component={Link}
                to={routes.feed.path}
              >
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Feed" />
              </ListItem>

              <ListItem
                button
                active={pathname === routes.leagues.path}
                component={Link}
                to={routes.leagues.path}
              >
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Leagues" />
              </ListItem>

              <ListItem
                button
                active={pathname === routes.settings.path}
                component={Link}
                to={routes.settings.path}
              >
                <ListItemIcon>
                  <SettingsRounded />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}

export default AppBar;
