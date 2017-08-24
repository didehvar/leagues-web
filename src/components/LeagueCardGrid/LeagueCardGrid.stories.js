import React from 'react';
import { storiesOf } from '@storybook/react';

import Decorators from '../../../storybook/decorators';

import LeagueCardGrid from './index';

const leagues = [
  {
    id: 1,
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'gb'
  },
  {
    id: 2,
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'de'
  },
  {
    id: 3,
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'sa'
  }
];

storiesOf('LeagueCardGrid', module)
  .addDecorator(Decorators.router())
  .add('default', () => <LeagueCardGrid leagues={leagues} />);
