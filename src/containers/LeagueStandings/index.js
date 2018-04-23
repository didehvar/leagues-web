import React from 'react';
import faker from 'faker/locale/en_GB';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

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

const LeagueStandings = ({ leagues }) => {
  return <Table columns={columns} data={leagues} />;
};

LeagueStandings.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.object)
};

LeagueStandings.defaultProps = {
  // TODO: remove, redux
  leagues: Array(10)
    .fill()
    .map(() => ({
      id: faker.random.number(),
      avatar: faker.image.imageUrl(50, 50),
      name: faker.name.findName(),
      points: faker.random.number()
    }))
};

export default LeagueStandings;
