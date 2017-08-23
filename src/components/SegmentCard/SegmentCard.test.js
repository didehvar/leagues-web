import React from 'react';
import { shallow } from 'enzyme';

import SegmentCard from './index';

describe('<SegmentCard />', () => {
  it('shallow renders without crashing', () => {
    shallow(<SegmentCard />);
  });
});
