import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker/locale/en_GB';
import Avatar from 'material-ui/Avatar';

import Table from './index';

const columns = [
  {
    id: 'avatar',
    disablePadding: true,
    component: ({ value }) => <Avatar src={value} />
  },
  {
    id: 'name',
    label: 'Name',
    disablePadding: true,
    default: true
  },
  {
    id: 'points',
    label: 'Points',
    disablePadding: true,
    numeric: true
  }
];

const data = Array(20).fill().map(() => ({
  id: faker.random.number(),
  avatar: faker.image.imageUrl(50, 50),
  name: faker.name.findName(),
  points: faker.random.number()
}));

storiesOf('Table', module).add('default', () =>
  <Table columns={columns} data={data} />
);
