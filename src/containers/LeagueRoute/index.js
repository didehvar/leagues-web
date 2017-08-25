import React from 'react';
import { Div } from 'glamorous';

import CardGrid from '../../components/CardGrid';
import SegmentCard from '../../components/SegmentCard';
import LeagueNavTabs from '../../components/LeagueNavTabs';

import segmentCardFaker from '../../components/SegmentCard/SegmentCard.faker';

const segments = [...Array(3)].map(segmentCardFaker);
const tabs = [
  {
    label: 'Segments',
    component: () => <CardGrid cards={segments} component={SegmentCard} />
  },
  {
    label: 'Standings',
    component: () => <div />
  }
];

function LeagueRoute() {
  return (
    <Div>
      <LeagueNavTabs tabs={tabs} />
    </Div>
  );
}

export default LeagueRoute;
