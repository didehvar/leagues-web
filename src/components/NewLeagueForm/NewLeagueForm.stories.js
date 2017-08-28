import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NewLeagueForm from './index';

storiesOf('NewLeagueForm', module).add('default', () =>
  <NewLeagueForm onSubmit={action('form-submit')} />
);
