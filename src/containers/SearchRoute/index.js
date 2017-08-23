import React from 'react';

import SearchField from '../../components/SearchField';
import LeagueCardGrid from '../../components/LeagueCardGrid';

import * as Style from './style';

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
    <Style.Container>
      <Style.SearchField>
        <SearchField />
      </Style.SearchField>
      <LeagueCardGrid leagues={leagues} />
    </Style.Container>
  );
}

export default SearchRoute;
