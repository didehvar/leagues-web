import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Routes from '../../utils/routes';

import * as Style from './style.js';

function CardGrid({ history: { push }, cards, component: Component }) {
  return (
    <Style.Container>
      {cards.map(league =>
        <Style.CardWrapper key={league.id}>
          <Component
            {...league}
            handleView={() => push(Routes.league(league.id))}
            handleJoin={() => console.log('TODO')}
          />
        </Style.CardWrapper>
      )}
    </Style.Container>
  );
}

export default withRouter(CardGrid);

CardGrid.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  cards: PropTypes.array,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

CardGrid.defaultProps = {
  leagues: []
};
