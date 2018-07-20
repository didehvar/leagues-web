import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import League from './League';
import {
  fetchLeague,
  getLeague,
  isFetching,
  errorMessage,
} from '../../ducks/leagues';

export default flowRight(
  connect(
    (state, ownProps) => ({
      league: getLeague(state, ownProps.match.params.id),
      isFetching: isFetching(state),
      errorMessage: errorMessage(state),
    }),
    { fetch: fetchLeague }
  ),
  withFetchId()
)(League);
