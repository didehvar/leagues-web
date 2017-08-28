import React from 'react';
import { shallow } from 'enzyme';

import Table from './index';

describe('<Table />', () => {
  it('shallow renders without crashing', () => {
    shallow(<Table />);
  });
});
