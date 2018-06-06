import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as leagueActions from '../../actions/leagues';

import Routes from '../../utils/routes';

class LeagueUseInviteRoute extends Component {
  state = { error: null };

  async componentDidMount() {
    const { useInvite, match, history } = this.props;

    try {
      await useInvite(match.params.id, match.params.code);
      history.push(Routes.league(match.params.id, match.params.slug));
    } catch (ex) {
      this.setState({ error: ex.message });
    }
  }

  render() {
    const { error } = this.state;
    return <div>{error}</div>;
  }
}

export default connect(null, leagueActions)(LeagueUseInviteRoute);
