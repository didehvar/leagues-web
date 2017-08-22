import React from 'react';
import { shallow } from 'enzyme';

import LeagueCardGrid from './index';

describe('<LeagueCardGrid />', () => {
  it('shallow renders without crashing', () => {
    shallow(<LeagueCardGrid />);
  });
});
