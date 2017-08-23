import React from 'react';
import PropTypes from 'prop-types';

import LeagueCard from '../LeagueCard';

import * as Style from './style.js';

function LeagueCardGrid({ leagues }) {
  return (
    <Style.Container>
      {leagues.map(league =>
        <Style.CardWrapper key={league.id}>
          <LeagueCard {...league} />
        </Style.CardWrapper>
      )}
    </Style.Container>
  );
}

export default LeagueCardGrid;

LeagueCardGrid.propTypes = {
  leagues: PropTypes.array
};

LeagueCardGrid.defaultProps = {
  leagues: []
};
