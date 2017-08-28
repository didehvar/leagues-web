import React from 'react';
import faker from 'faker';

import SegmentCard from '../../components/SegmentCard';
import LeagueNavTabs from '../../components/LeagueNavTabs';

import LeagueStandings from '../LeagueStandings';

const segments = Array(5).fill().map(() => ({
  id: faker.random.number(),
  name: faker.random.words(5),
  startDate: faker.date.past(),
  endDate: faker.date.future()
}));

const tabs = [
  {
    label: 'Segments',
    children: (
      <div>
        {segments.map(segment =>
          <SegmentCard key={segment.id} {...segment}>
            <LeagueStandings />
          </SegmentCard>
        )}
      </div>
    )
  },
  {
    label: 'Standings',
    children: <LeagueStandings />
  }
];

function LeagueRoute() {
  return (
    <div>
      <LeagueNavTabs tabs={tabs} />
    </div>
  );
}

export default LeagueRoute;
