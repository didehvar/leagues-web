import React from 'react';
import { storiesOf } from '@storybook/react';
import addMonths from 'date-fns/add_months';

import DateRange from './index';

storiesOf('DateRange', module)
  .add('default', () =>
    <DateRange start={new Date()} end={addMonths(new Date(), 1)} />
  )
  .add('same month', () =>
    <DateRange start={new Date(2017, 1, 1)} end={new Date(2017, 1, 10)} />
  );
