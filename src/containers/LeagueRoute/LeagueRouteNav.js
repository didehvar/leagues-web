import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

import FlagIcon from '../../components/FlagIcon';
import NavBarGroup from '../../components/NavBarGroup';

class LeagueRouteNav extends Component {
  onClickFlag = () => {};

  render() {
    return (
      <NavBarGroup
        leftComponent={() =>
          <IconButton
            color="contrast"
            onClick={this.onClickFlag}
            aria-label="League page"
          >
            <FlagIcon countryCode="gb" />
          </IconButton>}
      >
        League Name
      </NavBarGroup>
    );
  }
}

LeagueRouteNav.propTypes = {};

export default LeagueRouteNav;
