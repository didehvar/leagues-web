import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import Decorators from '../../../storybook/decorators';

import SegmentCard from './index';

const props = () => ({
  id: faker.random.number(),
  name: faker.random.words(5),
  startDate: faker.date.past(),
  endDate: faker.date.future(),
  children: (
    <h1>
      {faker.random.word(3)}
    </h1>
  )
});

storiesOf('SegmentCard', module)
  .addDecorator(Decorators.router())
  .add('default', () =>
    <SegmentCard {...props()}>
      {faker.lorem.paragraph()}
    </SegmentCard>
  )
  .add('multiple', () =>
    <div>
      {Array(5)
        .fill()
        .map(() => <SegmentCard key={faker.random.number()} {...props()} />)}
    </div>
  );
