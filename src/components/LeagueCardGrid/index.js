import React from 'react';
import PropTypes from 'prop-types';

import LeagueCard from '../LeagueCard';

import * as Style from './style.js';

function LeagueCardGrid({ leagues }) {
  return (
    <Style.Container>
      {leagues.map(({ title, countryCode }) =>
        <Style.CardWrapper>
          <LeagueCard title={title} countryCode={countryCode} />
        </Style.CardWrapper>
      )}
    </Style.Container>
  );
}

export default LeagueCardGrid;

LeagueCardGrid.propTypes = {
  leagues: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired
  })
};

LeagueCardGrid.defaultProps = {
  leagues: []
};
