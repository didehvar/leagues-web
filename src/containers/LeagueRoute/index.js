import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Div } from 'glamorous';
import { parse } from 'querystring';

import * as leagueActions from '../../actions/leagues';
import { getLeague, getRounds, getAuthUser } from '../../reducers';
import Routes from '../../utils/routes';

import AppBar from '../../components/AppBar';
import SegmentCard from '../../components/SegmentCard';

import LeagueStandings from '../LeagueStandings';
import AddSegmentDialog from '../AddSegmentDialog';
import JoinLeagueButton from '../JoinLeagueButton';

import * as Style from './style';

class LeagueRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.match.isExact ? 0 : 1,
      defaultRoundId: parseInt(
        parse(props.location.search.substr(1)).segment,
        10
      )
    };
  }

  handleChange = value => {
    const {
      history,
      league: { id, slug }
    } = this.props;
    if (value) history.push(Routes.leagueStandings(id, slug));
    else history.push(Routes.league(id, slug));
  };

  async componentDidMount() {
    const { fetchLeague, match } = this.props;
    await fetchLeague(match.params.id);
  }

  static getDerivedStateFromProps = nextProps => ({
    value: nextProps.match.isExact ? 0 : 1
  });

  segmentOnOpen = id => {
    const {
      location: { pathname },
      history
    } = this.props;
    history.push({
      pathname: pathname,
      search: `?segment=${id}`
    });
  };

  segmentOnClose = () => {
    const {
      location: { pathname },
      history
    } = this.props;
    history.push(pathname);
  };

  render() {
    const { value, defaultRoundId } = this.state;
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
                onOpen={this.segmentOnOpen}
                onClose={this.segmentOnClose}
                defaultOpen={round.id === defaultRoundId}
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
                      <Button variant="raised" color="primary" onClick={onOpen}>
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
