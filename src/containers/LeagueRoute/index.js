import React from 'react';
import { Div } from 'glamorous';
import Avatar from 'material-ui/Avatar';

import CardGrid from '../../components/CardGrid';
import SegmentCard from '../../components/SegmentCard';
import LeagueNavTabs from '../../components/LeagueNavTabs';
import LeagueStandings from '../../components/LeagueStandings';

import segmentCardFaker from '../../components/SegmentCard/SegmentCard.faker';
import leagueStandingsFaker from '../../components/LeagueStandings/LeagueStandings.faker';

const segments = [...Array(3)].map(segmentCardFaker);
const columns = [
  {
    id: 'avatar',
    disablePadding: true,
    component: ({ value }) => <Avatar src={value} />
  },
  {
    id: 'name',
    label: 'Name',
    disablePadding: true,
    default: true
  },
  {
    id: 'points',
    label: 'Points',
    disablePadding: true,
    numeric: true
  }
];
const data = Array(20).fill().map(leagueStandingsFaker);

const tabs = [
  {
    label: 'Segments',
    component: () =>
      <Div marginTop="0.5rem">
        <CardGrid cards={segments} component={SegmentCard} />
      </Div>
  },
  {
    label: 'Standings',
    component: () => <LeagueStandings columns={columns} data={data} />
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
