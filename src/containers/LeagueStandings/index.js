import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import { getPoints } from '../../reducers';

import Table from '../../components/Table';

const columns = [
  {
    id: 'avatar',
    padding: 'dense',
    component: ({ value }) => <Avatar src={value} />,
  },
  {
    id: 'name',
    label: 'Name',
    padding: 'none',
  },
  {
    default: true,
    id: 'points',
    label: 'Points',
    padding: 'dense',
    numeric: true,
  },
];

class LeagueStandings extends React.Component {
  render() {
    const { points } = this.props;
    return <Table columns={columns} data={points} order="desc" />;
  }
}

LeagueStandings.propTypes = {
  points: PropTypes.array,
};

LeagueStandings.defaultProps = {
  points: [],
};

export default connect((state, props) => ({
  points: getPoints(state, props.leagueId, props.roundId),
}))(LeagueStandings);
