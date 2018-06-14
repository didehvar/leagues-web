import React, { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BottomNavigation from '@material-ui/core/BottomNavigation';

import BottomNavButton from '../BottomNavButton';
import Routes from '../../utils/routes';

const defaultValue = 'search';
const links = [
  { url: Routes.home, value: 'feed', icon: <MenuIcon /> },
  {
    url: Routes.search,
    value: defaultValue,
    icon: <SearchIcon />,
    matchStart: true
  },
  {
    url: Routes.newLeague,
    value: 'create',
    icon: <AddIcon />
  },
  // {
  //   url: Routes.profile,
  //   value: 'profile',
  //   icon: <PersonIcon />,
  //   disabled: true
  // },
  {
    url: Routes.settings,
    value: 'more',
    icon: <MoreHorizIcon />
  }
];

class BottomNav extends Component {
  handleChange = (event, value) => {
    this.props.history.push(links.find(l => l.value === value).url);
  };

  render() {
    const {
      location: { pathname }
    } = this.props;
    const link = links.find(
      l => l.url === pathname || (l.matchStart && pathname.startsWith(l.url))
    );
    const value = (link && link.value) || defaultValue;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        {links.map(({ value, icon, disabled }) => (
          <BottomNavButton
            key={value}
            label={value[0].toUpperCase() + value.slice(1)}
            value={value}
            icon={icon}
            disabled={disabled}
          />
        ))}
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);
