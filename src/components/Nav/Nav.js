import React from 'react';
import BottomNav from './BottomNav';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import theme from '../../utils/theme';

import { Container, Title, TitleContent } from './Nav.style';

class Nav extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Container>
        <Hidden mdUp>
          <BottomNav />
        </Hidden>

        <Hidden smDown>
          <AppBar
            position="absolute"
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
                position: 'relative',
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

            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Drawer>
        </Hidden>

        <div
          style={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing.unit * 3,
          }}
        >
          {children}
        </div>
      </Container>
    );
  }
}

export default Nav;
