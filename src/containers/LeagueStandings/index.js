import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import { getRound, getLeague, getParticipants } from '../../reducers';

import Table from '../../components/Table';

const columns = [
  {
    id: 'avatar',
    padding: 'none',
    component: ({ value }) => <Avatar src={value} />
  },
  {
    default: true,
    id: 'name',
    label: 'Name',
    padding: 'none'
  },
  {
    id: 'points',
    label: 'Points',
    padding: 'none',
    numeric: true
  }
];

class LeagueStandings extends React.Component {
  constructor(props) {
    super(props);

    const { round = {}, participants } = props;
    const { points = [] } = round;
    this.state = {
      points: points.map(({ id, userId, points }) => {
        const user = participants.find(pa => pa.id === userId);
        return {
          id,
          avatar: user.avatar,
          name: user.name,
          points
        };
      })
    };
  }

  render() {
    const { points } = this.state;
    return <Table columns={columns} data={points} />;
  }
}

LeagueStandings.propTypes = {
  roundId: PropTypes.number,
  leagueId: PropTypes.number
};

LeagueStandings.defaultProps = {
  roundId: null,
  leagueId: null
};

export default connect((state, props) => ({
  league: getLeague(state, props.leagueId),
  round: getRound(state, props.roundId),
  participants: getParticipants(state, props.leagueId)
}))(LeagueStandings);
