import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import BottomNav from './BottomNav';
import DesktopNav from './DesktopNav';
import MobileAppBar from './MobileAppBar';

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hidden mdUp>
          <MobileAppBar />
          <BottomNav />
        </Hidden>

        <Hidden smDown>
          <DesktopNav />
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Nav;
