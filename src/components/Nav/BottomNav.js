import React from 'react';
import Link from 'react-router-dom/Link';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Menu from '@material-ui/icons/Menu';
import Group from '@material-ui/icons/Group';
import SettingsRounded from '@material-ui/icons/SettingsRounded';

import routes from '../../utils/routes';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  render() {
    const { pathname } = this.props;

    return (
      <BottomNavigation
        showLabels
        value={pathname}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          component={Link}
          label="Feed"
          icon={<Menu />}
          value={routes.feed.path}
          to={routes.feed.path}
        />

        <BottomNavigationAction
          component={Link}
          label="Leagues"
          icon={<Group />}
          value={routes.leagues.path}
          to={routes.leagues.path}
        />

        <BottomNavigationAction
          component={Link}
          label="Settings"
          icon={<SettingsRounded />}
          value={routes.settings.path}
          to={routes.settings.path}
        />
      </BottomNavigation>
    );
  }
}

export default BottomNav;
