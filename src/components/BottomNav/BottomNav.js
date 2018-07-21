import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation showLabels value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Feed" icon={<MenuIcon />} />
        <BottomNavigationAction label="Leagues" icon={<GroupIcon />} />
        <BottomNavigationAction label="Settings" icon={<MoreHorizIcon />} />
      </BottomNavigation>
    );
  }
}

export default BottomNav;
