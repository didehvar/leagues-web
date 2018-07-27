import React from 'react';

import Spacer from '../UI/Spacer';
import BottomActions from './BottomActions';
import RoundCard from './RoundCard';
import StandingsPreview from './StandingsPreview';

import { Container } from './League.style';

class League extends React.PureComponent {
  render() {
    const { league, rounds } = this.props;

    if (!league) return false;

    return (
      <React.Fragment>
        <Container>
          <StandingsPreview pointIds={league.points} />

          <Spacer small />

          {rounds.map(r => <RoundCard key={r.id} {...r} />)}
        </Container>

        <BottomActions />
      </React.Fragment>
    );
  }
}

export default League;
