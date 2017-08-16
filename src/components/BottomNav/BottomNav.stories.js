import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Decorators from '../../../storybook/decorators';

import BottomNav from './index';

storiesOf('BottomNav', module)
  .addDecorator(Decorators.router())
  .add('default', () => <BottomNav />);
