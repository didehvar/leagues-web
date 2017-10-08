import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import some from 'lodash/some';

import * as leagueActions from '../../actions/leagues';
import {
  getLeague,
  getRounds,
  getParticipants,
  getAuthUser
} from '../../reducers';

import AppBar from '../../components/AppBar';
import SegmentCard from '../../components/SegmentCard';

import LeagueStandings from '../LeagueStandings';
import AddSegmentDialog from '../AddSegmentDialog';
import JoinLeagueButton from '../JoinLeagueButton';

import * as Style from './style';

class LeagueRoute extends Component {
  state = { value: 0 };

  handleChange = value => this.setState({ value });

  onCreate = () => {};

  async componentDidMount() {
    const { fetchLeague, match } = this.props;
    await fetchLeague(match.params.id);
  }

  render() {
    const { value } = this.state;
    const { user, league, rounds, participants } = this.props;

    return (
      <Style.Container>
        <AppBar
          color="default"
          title={league && league.name}
          left={<AddSegmentDialog leagueId={league && league.id} />}
          right={
            <JoinLeagueButton
              leagueId={league && league.id}
              joined={user && some(participants, p => p.id === user.id)}
            />
          }
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
              <SegmentCard key={round.id} {...round}>
                <LeagueStandings />
              </SegmentCard>
            ))}

            {!rounds.length && (
              <Typography align="center">
                This league has no segments.
              </Typography>
            )}
          </div>
          <LeagueStandings />
        </SwipeableViews>
      </Style.Container>
    );
  }
}

export default connect((state, props) => {
  const league = getLeague(state, props.match.params.id);
  return {
    league,
    rounds: getRounds(state),
    participants: league && getParticipants(state, league.id),
    user: getAuthUser(state)
  };
}, leagueActions)(LeagueRoute);
