import React from 'react';
import Grid from '@material-ui/core/Grid';

import AppBar from './AppBar';
import BottomActions from './BottomActions';
import Round from './Round';
import StandingsPreview from './StandingsPreview';

import { Container } from './League.style';

class League extends React.PureComponent {
  render() {
    const { league, rounds } = this.props;

    if (!league) return false;

    return (
      <React.Fragment>
        <AppBar name={league.name} />

        <Container>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <StandingsPreview />
            </Grid>

            {rounds.map(r => (
              <Grid item xs={12} key={r.id}>
                <Round {...r} />
              </Grid>
            ))}
          </Grid>
        </Container>

        <BottomActions />
      </React.Fragment>
    );
  }
}

export default League;
