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
    this.state = { joined: JoinLeagueButton.joined(props) };
  }

  static joined = ({ user, participants }) =>
    user && some(participants, p => p && p.id === user.id);

  static getDerivedStateFromProps = nextProps => ({
    joined: JoinLeagueButton.joined(nextProps)
  });

  onClick = async () => {
    const { joined } = this.state;
    const { leaveLeague, joinLeague, leagueId } = this.props;

    try {
      if (JoinLeagueButton.joined(this.props)) {
        this.setState({ joined: false });
        await leaveLeague(leagueId);
      } else {
        this.setState({ joined: true });
        await joinLeague(leagueId);
      }
    } catch (ex) {
      console.error(ex);
      this.setState({ joined });
    }
  };

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
      <Button size="small" color="primary" onClick={this.onClick} {...rest}>
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
