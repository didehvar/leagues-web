import React from 'react';
import { shallow } from 'enzyme';

import BottomNav from './index';

describe('<BottomNav />', () => {
  it('shallow renders without crashing', () => {
    shallow(<BottomNav />);
  });
});
