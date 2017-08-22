import React from 'react';
import { shallow } from 'enzyme';

import LeagueCard from './index';

describe('<LeagueCard />', () => {
  it('shallow renders without crashing', () => {
    shallow(<LeagueCard />);
  });
});
