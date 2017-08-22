import React from 'react';
import { shallow } from 'enzyme';

import LoginButton from './index';

describe('<LoginButton />', () => {
  it('shallow renders without crashing', () => {
    shallow(<LoginButton />);
  });
});
