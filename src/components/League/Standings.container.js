import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import { fetchLeague, getSortedLeaguePoints } from '../../ducks/leagues';

import Standings from './Standings';

class StandingsContainer extends React.PureComponent {
  render() {
    const { points, fetch } = this.props;

    return (
      <Standings title="Current Standings" points={points} fetch={fetch} />
    );
  }
}

export default flowRight(
  connect(
    (state, ownProps) => {
      const leagueId = parseInt(ownProps.match.params.id, 10);
      return {
        points: getSortedLeaguePoints(state, leagueId),
      };
    },
    { fetch: fetchLeague },
  ),
  withFetchId,
)(StandingsContainer);
