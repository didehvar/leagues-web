import React from 'react';
import { shallow } from 'enzyme';

import LeagueStandings from './index';

describe('<LeagueStandings />', () => {
  it('shallow renders without crashing', () => {
    shallow(<LeagueStandings />);
  });
});
