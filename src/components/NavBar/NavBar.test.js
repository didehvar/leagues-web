import React from 'react';
import { shallow } from 'enzyme';

import NavBar from './index';

describe('<NavBar />', () => {
  it('shallow renders without crashing', () => {
    shallow(<NavBar />);
  });
});
