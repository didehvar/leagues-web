import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';

import { MenuButton, Title } from './AppBar.style';

class LeagueAppBar extends React.PureComponent {
  render() {
    const { name } = this.props;

    return (
      <AppBar>
        <Toolbar>
          {/* <MenuButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </MenuButton> */}

          <Title noWrap variant="title" color="inherit">
            {name}
          </Title>
        </Toolbar>
      </AppBar>
    );
  }
}

export default LeagueAppBar;
