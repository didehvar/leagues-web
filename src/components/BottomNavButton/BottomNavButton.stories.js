import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import MenuIcon from '@material-ui/icons/Menu';

import BottomNavButton from './index';

storiesOf('BottomNavButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BottomNavButton
      label="Test"
      value="test"
      icon={<MenuIcon />}
      showLabel={boolean('Show label', false)}
      selected={boolean('Selected', false)}
    />
  ));
