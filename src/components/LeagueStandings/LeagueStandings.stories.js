import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Avatar from 'material-ui/Avatar';

import LeagueStandings from './index';

import leagueStandingsFaker from './LeagueStandings.faker';

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

const data = Array(20).fill().map(leagueStandingsFaker);

storiesOf('LeagueStandings', module).add('default', () =>
  <LeagueStandings columns={columns} data={data} />
);
