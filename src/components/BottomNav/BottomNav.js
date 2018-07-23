import React from 'react';
import memoize from 'lodash/memoize';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import routes from '../../utils/routes';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  static routes = [
    {
      label: 'Feed',
      icon: <MenuIcon />,
      route: routes.home,
    },
    {
      label: 'Leagues',
      icon: <GroupIcon />,
      route: routes._leagues,
    },
    {
      label: 'Settings',
      icon: <MoreHorizIcon />,
      route: routes.settings,
    },
  ];

  value = memoize(
    pathname =>
      [...BottomNav.routes].reverse().find(r => pathname.startsWith(r.route))
        .route,
  );

  render() {
    const {
      history,
      location: { pathname },
    } = this.props;

    console.log('rendering!');

    return (
      <BottomNavigation
        showLabels
        value={this.value(pathname)}
        onChange={this.handleChange}
      >
        {BottomNav.routes.map(({ label, icon, route }) => (
          <BottomNavigationAction
            key={label}
            label={label}
            icon={icon}
            value={route}
            onClick={() => history.push(route)}
          />
        ))}
      </BottomNavigation>
    );
  }
}

export default BottomNav;
