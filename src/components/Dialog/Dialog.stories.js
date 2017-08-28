import React from 'react';
import { storiesOf } from '@storybook/react';
import { Div } from 'glamorous';
import faker from 'faker';

import Dialog from './index';

const content = Array(3).fill().map(() =>
  <p>
    {faker.lorem.paragraph()}
  </p>
);

const props = {
  open: true,
  name: faker.lorem.words(20)
};

storiesOf('Dialog', module)
  .add('default', () =>
    <Dialog {...props}>
      {content}
    </Dialog>
  )
  .add('fullscreen', () =>
    <Dialog {...props} fullScreen>
      {content}
    </Dialog>
  );
