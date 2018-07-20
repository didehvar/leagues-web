import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

import { MenuButton, Title } from './AppBar.style';

class LeagueAppBar extends React.PureComponent {
  render() {
    return (
      <AppBar>
        <Toolbar variant="dense">
          <MenuButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </MenuButton>

          <Title variant="title" color="inherit">
            League
          </Title>
        </Toolbar>
      </AppBar>
    );
  }
}

export default LeagueAppBar;
