import React from 'react';
import { shallow } from 'enzyme';

import BottomNavButton from './index';

describe('<BottomNavButton />', () => {
  it('shallow renders without crashing', () => {
    shallow(<BottomNavButton />);
  });
});
