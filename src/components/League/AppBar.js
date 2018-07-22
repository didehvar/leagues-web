import React from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';

import { /* MenuButton, */ Title } from './AppBar.style';

class AppBar extends React.PureComponent {
  render() {
    const { name } = this.props;

    return (
      <MaterialAppBar>
        <Toolbar>
          {/* <MenuButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </MenuButton> */}

          <Title noWrap variant="title" color="inherit">
            {name}
          </Title>
        </Toolbar>
      </MaterialAppBar>
    );
  }
}

export default AppBar;
