import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker/locale/en_GB';

import Decorators from '../../../storybook/decorators';

import LeagueCard from './index';

const props = () => ({
  id: faker.random.number(),
  title: faker.random.words(),
  countryCode: faker.address.countryCode().toLowerCase(),
  onView: () => {},
  onJoin: () => {}
});

storiesOf('LeagueCard', module)
  .addDecorator(Decorators.router())
  .add('default', () => <LeagueCard {...props} />);
