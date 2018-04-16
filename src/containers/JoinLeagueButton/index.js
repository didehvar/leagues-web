import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import some from 'lodash/some';

import { leaveLeague, joinLeague } from '../../actions/leagues';
import { getLeague, getParticipants, getAuthUser } from '../../reducers';

class JoinLeagueButton extends Component {
  static propTypes = {
    leagueId: PropTypes.number
  };

  state = { joined: false };

  constructor(props) {
    super(props);
    this.state = { joined: this.joined(props) };
  }

  joined = props => {
    const { user, participants } = props;
    return user && some(participants, p => p.id === user.id);
  };

  onClick = async () => {
    const { joined } = this.state;
    const { leaveLeague, joinLeague, leagueId } = this.props;

    try {
      if (this.joined(this.props)) {
        this.setState({ joined: false });
        await leaveLeague(leagueId);
      } else {
        this.setState({ joined: true });
        await joinLeague(leagueId);
      }
    } catch (ex) {
      this.setState({ joined });
    }
  };

  getDerivedStateFromProps(nextProps) {
    return { joined: this.joined(nextProps) };
  }

  render() {
    const { joined } = this.state;
    const {
      leagueId,
      joinLeague,
      leaveLeague,
      participants,
      user,
      ...rest
    } = this.props;

    return (
      <Button dense color="primary" onClick={this.onClick} {...rest}>
        {joined ? 'Leave' : 'Join'}
      </Button>
    );
  }
}

export default connect(
  (state, props) => ({
    participants:
      getLeague(state, props.leagueId) &&
      getParticipants(state, props.leagueId),
    user: getAuthUser(state)
  }),
  { leaveLeague, joinLeague }
)(JoinLeagueButton);
