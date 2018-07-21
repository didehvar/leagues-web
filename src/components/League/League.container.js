import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  getRounds,
  isFetching,
  errorMessage,
} from '../../ducks/leagues';

import League from './League';

export default flowRight(
  connect(
    (state, ownProps) => {
      const leagueId = ownProps.match.params.id;

      return {
        league: getLeague(state, leagueId),
        rounds: getRounds(state, leagueId),
        isFetching: isFetching(state),
        errorMessage: errorMessage(state),
      };
    },
    { fetch: fetchLeague }
  ),
  withFetchId()
)(League);
