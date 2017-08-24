import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Routes from '../../utils/routes';

import LeagueCard from '../LeagueCard';

import * as Style from './style.js';

function LeagueCardGrid({ history: { push }, leagues }) {
  return (
    <Style.Container>
      {leagues.map(league =>
        <Style.CardWrapper key={league.id}>
          <LeagueCard
            {...league}
            handleView={() => push(Routes.league(league.id))}
            handleJoin={() => console.log('TODO')}
          />
        </Style.CardWrapper>
      )}
    </Style.Container>
  );
}

export default withRouter(LeagueCardGrid);

LeagueCardGrid.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  leagues: PropTypes.array
};

LeagueCardGrid.defaultProps = {
  leagues: []
};
