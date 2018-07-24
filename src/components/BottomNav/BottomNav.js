import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import routes from '../../utils/routes';

import { BottomNavigation } from './BottomNav.style';

class BottomNav extends React.PureComponent {
  onClick = route => () => {
    const { history } = this.props;
    history.push(route);
  };

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

export default withRouter(BottomNav);
