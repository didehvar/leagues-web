import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CreateLeagueForm from './index';

storiesOf('CreateLeagueForm', module).add('default', () =>
  <CreateLeagueForm onSubmit={action('form-submit')} />
);
