import React from 'react';
import { storiesOf } from '@storybook/react';
import addMonths from 'date-fns/add_months';

import Decorators from '../../../storybook/decorators';

import SegmentCard from './index';

storiesOf('SegmentCard', module)
  .addDecorator(Decorators.router())
  .add('default', () =>
    <SegmentCard
      id={1}
      name="Sunt quis reprehenderit"
      startDate={new Date()}
      endDate={addMonths(new Date(), 1)}
    />
  );
