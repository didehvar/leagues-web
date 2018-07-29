import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import AppBar from './AppBar';
import BottomNav from './BottomNav';

class Nav extends React.Component {
  render() {
    const { pathname } = this.props;

    return (
      <React.Fragment>
        <AppBar pathname={pathname} />

        <Hidden mdUp>
          <BottomNav pathname={pathname} />
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Nav;
