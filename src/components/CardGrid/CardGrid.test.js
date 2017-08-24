import React from 'react';
import { shallow } from 'enzyme';

import CardGrid from './index';

describe('<CardGrid />', () => {
  it('shallow renders without crashing', () => {
    shallow(<CardGrid />);
  });
});
