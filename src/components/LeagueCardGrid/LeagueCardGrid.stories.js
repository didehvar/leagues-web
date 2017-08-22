import React from 'react';
import { storiesOf } from '@storybook/react';

import LeagueCardGrid from './index';

const leagues = [
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'gb'
  },
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'de'
  },
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'sa'
  }
];

storiesOf('LeagueCardGrid', module).add('default', () =>
  <LeagueCardGrid leagues={leagues} />
);
