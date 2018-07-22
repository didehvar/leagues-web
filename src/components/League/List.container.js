import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  fetchLeagues,
  getSearchLeagues,
  getSearchTotal,
  getUsersLeagues,
} from '../../ducks/leagues';
import List from '../UI/List';
import LeagueCard from './LeagueCard';

class ListContainer extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
  };

  static defaultProps = {
    userId: undefined,
  };

  render() {
    return <List component={LeagueCard} {...this.props} />;
  }
}

export default connect(
  (state, { userId }) => ({
    data: userId ? getUsersLeagues(state, userId) : getSearchLeagues(state),
    totalCount: getSearchTotal(state),
  }),
  (dispatch, { userId }) => ({
    fetch: args => dispatch(fetchLeagues({ userId, ...args })),
  }),
)(ListContainer);
