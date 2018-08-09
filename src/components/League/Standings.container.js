import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getSortedLeaguePoints,
  getLeagueType,
} from '../../ducks/leagues';

import Standings from './Standings';

class StandingsContainer extends React.PureComponent {
  render() {
    const { type, points } = this.props;

    return (
      <Standings
        title="Current Standings"
        points={points}
        type={type}
        hideResult
      />
    );
  }
}

export default flowRight(
  connect(
    (state, ownProps) => {
      const leagueId = parseInt(ownProps.match.params.id, 10);
      return {
        type: getLeagueType(state, leagueId),
        points: getSortedLeaguePoints(state, leagueId),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(StandingsContainer);
