import React from 'react';
import { shallow } from 'enzyme';

import DateRange from './index';

describe('<DateRange />', () => {
  it('shallow renders without crashing', () => {
    shallow(<DateRange />);
  });
});
