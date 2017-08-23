import React from 'react';
import { shallow } from 'enzyme';

import SearchField from './index';

describe('<SearchField />', () => {
  it('shallow renders without crashing', () => {
    shallow(<SearchField />);
  });
});
