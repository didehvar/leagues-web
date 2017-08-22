import React from 'react';
import { Div } from 'glamorous';

import LeagueCardGrid from '../../components/LeagueCardGrid';

const leagues = [
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'gb'
  },
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'de'
  },
  {
    title: 'Suspendisse posuere tellus sit amet tortor mollis vulputate',
    countryCode: 'sa'
  }
];

function SearchRoute() {
  return (
    <Div padding="20">
      <LeagueCardGrid leagues={leagues} />
    </Div>
  );
}

export default SearchRoute;
