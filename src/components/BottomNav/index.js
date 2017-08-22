import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';
import AddIcon from 'material-ui-icons/Add';
import PersonIcon from 'material-ui-icons/Person';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import BottomNavigation from 'material-ui/BottomNavigation';

import BottomNavButton from '../BottomNavButton';
import Routes from '../../utils/routes';

const links = [
  { url: Routes.home, value: 'feed', icon: <MenuIcon /> },
  {
    url: Routes.search,
    value: 'search',
    icon: <SearchIcon />,
    matchStart: true
  },
  {
    url: Routes.newLeague,
    value: 'create',
    icon: <AddIcon />
  },
  {
    url: Routes.profile,
    value: 'profile',
    icon: <PersonIcon />,
    disabled: true
  },
  {
    url: Routes.more,
    value: 'more',
    icon: <MoreHorizIcon />,
    disabled: true
  }
];

class BottomNav extends Component {
  handleChange = (event, value) => {
    this.props.history.push(links.find(l => l.value === value).url);
  };

  render() {
    const { location: { pathname } } = this.props;
    const value = links.find(
      l => l.url === pathname || (l.matchStart && pathname.startsWith(l.url))
    ).value;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        {links.map(({ value, icon, disabled }) =>
          <BottomNavButton
            key={value}
            label={value[0].toUpperCase() + value.slice(1)}
            value={value}
            icon={icon}
            disabled={disabled}
          />
        )}
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);
