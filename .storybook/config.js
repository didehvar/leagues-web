/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';

import Decorators from '../storybook/decorators';
import theme from '../src/constants/theme';

const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(muiTheme(theme));
addDecorator(withKnobs);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
