import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

import Table from '../../components/Table';

const columns = [
  {
    id: 'avatar',
    disablePadding: true,
    compact: true,
    component: ({ value }) => <Avatar src={value} />
  },
  {
    default: true,
    id: 'name',
    label: 'Name',
    disablePadding: true,
    compact: true
  },
  {
    id: 'points',
    label: 'Points',
    disablePadding: true,
    numeric: true,
    compact: true
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
  leagues: Array(10).fill().map(() => ({
    id: faker.random.number(),
    avatar: faker.image.imageUrl(50, 50),
    name: faker.name.findName(),
    points: faker.random.number()
  }))
};

export default LeagueStandings;
