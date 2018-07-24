import React from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import flowRight from 'lodash/flowRight';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import routes from '../../utils/routes';
import { getUserAuthenticated } from '../../ducks/users';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  onClick = route => () => {
    const { history } = this.props;
    history.push(route);
  };

  render() {
    const {
      authenticated,
      location: { pathname },
    } = this.props;

    if (pathname === routes.home && !authenticated) return false;

    return (
      <BottomNavigation
        showLabels
        value={pathname}
        onChange={this.handleChange}
      >
        <BottomNavigationAction
          label={'Feed'}
          icon={<MenuIcon />}
          value={routes.feed}
          onClick={this.onClick(routes.feed)}
        />

        <BottomNavigationAction
          label={'Leagues'}
          icon={<GroupIcon />}
          value={routes._leagues}
          onClick={this.onClick(routes._leagues)}
        />

        <BottomNavigationAction
          label={'Settings'}
          icon={<MoreHorizIcon />}
          value={routes.settings}
          onClick={this.onClick(routes.settings)}
        />
      </BottomNavigation>
    );
  }
}

export default flowRight(
  withRouter,
  connect(state => ({ authenticated: getUserAuthenticated(state) })),
)(BottomNav);
