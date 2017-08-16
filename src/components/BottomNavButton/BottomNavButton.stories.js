import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MenuIcon from 'material-ui-icons/Menu';

import Decorators from '../../../storybook/decorators';

import BottomNavButton from './index';

storiesOf('BottomNavButton', module)
  .addDecorator(Decorators.router())
  .add('default', () =>
    <BottomNavButton label="Test" value="test" icon={<MenuIcon />} />
  );
