import React from 'react';
import { Div } from 'glamorous';
import faker from 'faker';

import CardGrid from '../../components/CardGrid';
import SegmentCard from '../../components/SegmentCard';

import segmentCardFaker from '../../components/SegmentCard/SegmentCard.faker';

const segments = [...Array(3)].map(segmentCardFaker);

function LeagueRoute() {
  return (
    <Div>
      <CardGrid cards={segments} component={SegmentCard} />
    </Div>
  );
}

export default LeagueRoute;
