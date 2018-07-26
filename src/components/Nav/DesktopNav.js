import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import routes from '../../utils/routes';
import Logout from '../Auth/Logout';
import ChaportListItem from '../External/ChaportListItem';

import { Title, TitleContent, Content, Link, Footer } from './DesktopNav.style';

class DesktopNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
          style={{ width: `calc(100% - ${240}px)`, marginLeft: 240 }}
        >
          <Toolbar>
            <Typography variant="title" color="inherit">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            style: {
              position: 'fixed',
              width: 240,
            },
          }}
        >
          <Title>
            <TitleContent>
              <Typography variant="title">Impendulo</Typography>
            </TitleContent>
          </Title>

          <Divider />

          <List component={Content}>
            <ListItem button component={Link} to={routes.feed.path}>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItem>

            <ListItem button component={Link} to={routes.leagues.path}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Leagues" />
            </ListItem>

            <Logout>
              {logout => (
                <ListItem button onClick={logout}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </ListItem>
              )}
            </Logout>
          </List>

          <Divider />

          <Footer>
            <ChaportListItem />
          </Footer>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default DesktopNav;
