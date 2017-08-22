import React from 'react';
import { Div } from 'glamorous';

import LeagueCard from '../../components/LeagueCard';

const countries = ['gb', 'de', 'sa'];

function SearchRoute() {
  return (
    <Div padding="20">
      {countries.map(c =>
        <Div marginBottom="20">
          <LeagueCard key={c} countryCode={c} />
        </Div>
      )}
    </Div>
  );
}

export default SearchRoute;
