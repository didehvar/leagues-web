import React from 'react';
import { storiesOf } from '@storybook/react';

import Decorators from '../../../storybook/decorators';

import LeagueCard from './index';

storiesOf('LeagueCard', module)
  .addDecorator(Decorators.router())
  .add('default', () =>
    <LeagueCard
      id={1}
      title="Ut eu excepteur magna ad."
      handleView={() => {}}
      handleJoin={() => {}}
    />
  );
