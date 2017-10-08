import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import * as leagueActions from '../../actions/leagues';

class JoinLeagueButton extends Component {
  static propTypes = {
    leagueId: PropTypes.number,
    joined: PropTypes.bool
  };

  static defaultProps = {
    joined: false
  };

  onClick = async () => {
    const { joined } = this.props;

    if (joined) {
      await this.props.leaveLeague(this.props.leagueId);
    } else {
      await this.props.joinLeague(this.props.leagueId);
    }
  };

  render() {
    const { joined } = this.props;

    return (
      <Button dense color="primary" onClick={this.onClick}>
        {joined ? 'Leave' : 'Join'}
      </Button>
    );
  }
}

export default connect(null, leagueActions)(JoinLeagueButton);
