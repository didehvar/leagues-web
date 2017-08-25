import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';

import LeagueNavTabs from './index';

import leagueNavTabsFaker from './LeagueNavTabs.faker';

const tabs = Array(2).fill().map(leagueNavTabsFaker);

storiesOf('LeagueNavTabs', module).add('default', () =>
  <LeagueNavTabs tabs={tabs} />
);
