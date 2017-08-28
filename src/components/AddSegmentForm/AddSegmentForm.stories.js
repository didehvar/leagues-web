import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddSegmentForm from './index';

storiesOf('AddSegmentForm', module).add('default', () =>
  <AddSegmentForm onSubmit={action('form-submit')} />
);
