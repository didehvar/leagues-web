import React from 'react';
import { storiesOf } from '@storybook/react';

import Decorators from '../../../storybook/decorators';

import NavBar from './index';

storiesOf('NavBar', module)
  .addDecorator(Decorators.router())
  .add('default', () => <NavBar />);
