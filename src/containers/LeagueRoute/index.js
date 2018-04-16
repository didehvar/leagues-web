import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Div } from 'glamorous';

import * as leagueActions from '../../actions/leagues';
import { getLeague, getRounds, getAuthUser } from '../../reducers';

import AppBar from '../../components/AppBar';
import SegmentCard from '../../components/SegmentCard';

import LeagueStandings from '../LeagueStandings';
import AddSegmentDialog from '../AddSegmentDialog';
import JoinLeagueButton from '../JoinLeagueButton';

import * as Style from './style';

class LeagueRoute extends Component {
  state = { value: 0 };

  handleChange = value => this.setState({ value });

  async componentDidMount() {
    const { fetchLeague, match } = this.props;
    await fetchLeague(match.params.id);
  }

  render() {
    const { value } = this.state;
    const { user, league, rounds } = this.props;

    return (
      <Style.Container>
        <AppBar
          color="default"
          title={league && league.name}
          left={<AddSegmentDialog leagueId={league && league.id} />}
          right={<JoinLeagueButton leagueId={league && league.id} />}
        >
          <Tabs
            value={value}
            onChange={(e, v) => this.handleChange(v)}
            centered
            fullWidth
          >
            <Tab label="Segments" />
            <Tab label="Standings" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={i => this.handleChange(i)}
          animateHeight
        >
          <div>
            {rounds.map(round => (
              <SegmentCard
                {...round}
                key={round.id}
                owner={user.id === league.userId}
              >
                <LeagueStandings />
              </SegmentCard>
            ))}

            {!rounds.length && (
              <div>
                <Typography align="center">
                  This league has no segments.
                </Typography>

                <AddSegmentDialog leagueId={league && league.id}>
                  {onOpen => (
                    <Div marginTop="1rem" textAlign="center">
                      <Button raised color="primary" onClick={onOpen}>
                        Add a segment
                      </Button>
                    </Div>
                  )}
                </AddSegmentDialog>
              </div>
            )}
          </div>
          <LeagueStandings />
        </SwipeableViews>
      </Style.Container>
    );
  }
}

export default connect(
  (state, props) => ({
    league: getLeague(state, props.match.params.id),
    rounds: getRounds(state),
    user: getAuthUser(state)
  }),
  leagueActions
)(LeagueRoute);
