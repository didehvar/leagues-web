import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';

import * as leagueActions from '../../actions/leagues';
import { getLeague, getRounds } from '../../reducers';

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
    fetchLeague(match.params.id);
  }

  render() {
    const { value } = this.state;
    const { league, rounds } = this.props;

    return (
      <Style.Container>
        <AppBar
          color="default"
          title={league && league.name}
          left={<AddSegmentDialog leagueId={league && league.id} />}
          right={<JoinLeagueButton />}
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
          {league && (
            <div>
              {rounds.map(round => (
                <SegmentCard key={round.id} {...round}>
                  <LeagueStandings />
                </SegmentCard>
              ))}
            </div>
          )}
          <LeagueStandings />
        </SwipeableViews>
      </Style.Container>
    );
  }
}

export default connect(
  (state, props) => ({
    league: getLeague(state, props.match.params.id),
    rounds: getRounds(state)
  }),
  leagueActions
)(LeagueRoute);
