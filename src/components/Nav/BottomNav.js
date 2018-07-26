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
          value={routes.feed.path}
          to={routes.feed.path}
        />

        <BottomNavigationAction
          component={Link}
          label="Leagues"
          icon={<GroupIcon />}
          value={routes.leagues.path}
          to={routes.leagues.path}
        />

        <BottomNavigationAction
          component={Link}
          label="Settings"
          icon={<MoreHorizIcon />}
          value={routes.settings.path}
          to={routes.settings.path}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);
