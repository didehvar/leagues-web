import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Link from 'react-router-dom/Link';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import routes from '../../utils/routes';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  render() {
    const {
      location: { pathname },
    } = this.props;

    return (
      <BottomNavigation
        showLabels
        value={pathname}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          component={Link}
          label="Feed"
          icon={<MenuIcon />}
          value={routes.feed}
          to={routes.feed}
        />

        <BottomNavigationAction
          component={Link}
          label="Leagues"
          icon={<GroupIcon />}
          value={routes.leagues}
          to={routes.leagues}
        />

        <BottomNavigationAction
          component={Link}
          label="Settings"
          icon={<MoreHorizIcon />}
          value={routes.settings}
          to={routes.settings}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);
