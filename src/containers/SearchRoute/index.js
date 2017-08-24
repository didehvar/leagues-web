import React from 'react';

import CardGrid from '../../components/CardGrid';
import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import leagueCardFaker from '../../components/LeagueCard/LeagueCard.faker';

import * as Style from './style';

const leagues = [...Array(3)].map(leagueCardFaker);

function SearchRoute() {
  return (
    <Style.Container>
      <Style.SearchField>
        <SearchField />
      </Style.SearchField>
      <CardGrid cards={leagues} component={LeagueCard} />
    </Style.Container>
  );
}

export default SearchRoute;
