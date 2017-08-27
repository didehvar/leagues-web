import React from 'react';
import faker from 'faker';
import { Div } from 'glamorous';
import { storiesOf } from '@storybook/react';

import Dialog from './index';

const content = (
  <Div padding="1rem 2rem">
    {Array(3).fill().map(() =>
      <p>
        {faker.lorem.paragraph()}
      </p>
    )}
  </Div>
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
