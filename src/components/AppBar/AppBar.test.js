import React from 'react';
import { shallow } from 'enzyme';

import AppBar from './index';

describe('<AppBar />', () => {
  it('shallow renders without crashing', () => {
    shallow(<AppBar />);
  });
});
