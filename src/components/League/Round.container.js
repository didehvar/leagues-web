import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withFetchId from '../../hocs/withFetchId';
import {
  fetchLeague,
  getLeague,
  isFetching,
  getErrorMessage,
} from '../../ducks/leagues';

import Round from './Round';

export default flowRight(
  connect(
    (state, ownProps) => ({
      league: getLeague(state, ownProps.match.params.id),
      isFetching: isFetching(state),
      errorMessage: getErrorMessage(state),
    }),
    { fetch: fetchLeague },
  ),
  withFetchId,
)(Round);
