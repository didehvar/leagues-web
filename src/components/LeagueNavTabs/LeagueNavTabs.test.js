import React from 'react';
import { shallow } from 'enzyme';

import LeagueNavTabs from './index';

describe('<LeagueNavTabs />', () => {
  it('shallow renders without crashing', () => {
    shallow(<LeagueNavTabs />);
  });
});
