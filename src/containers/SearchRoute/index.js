import React from 'react';

import Routes from '../../utils/routes';

import LeagueCard from '../../components/LeagueCard';
import SearchField from '../../components/SearchField';

import leagueCardFaker from '../../components/LeagueCard/LeagueCard.faker';

import * as Style from './style';

const leagues = [...Array(3)].map(leagueCardFaker);

function SearchRoute({ history }) {
  return (
    <div>
      <Style.SearchField>
        <SearchField />
      </Style.SearchField>
      {leagues.map(league =>
        <LeagueCard
          key={league.id}
          {...league}
          onView={() => history.push(Routes.league(league.id))}
          style={{ marginBottom: '1rem' }}
        />
      )}
    </div>
  );
}

export default SearchRoute;
