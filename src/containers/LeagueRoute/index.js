import React, { Component } from 'react';
import { connect } from 'react-redux';
import last from 'lodash/last';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Div } from 'glamorous';
import { parse } from 'querystring';

import * as leagueActions from '../../actions/leagues';
import {
  getLeague,
  getRounds,
  getAuthUser,
  getRoundError
} from '../../reducers';
import Routes from '../../utils/routes';

import AppBar from '../../components/AppBar';
import SegmentCard from '../../components/SegmentCard';
import ErrorMessage from '../../components/ErrorMessage';
import LeagueInviteBanner from '../../components/LeagueInviteBanner';

import LeagueInvite from '../LeagueInvite';
import LeagueStandings from '../LeagueStandings';
import AddSegmentDialog from '../AddSegmentDialog';
import JoinLeagueButton from '../JoinLeagueButton';

import * as Style from './style';

class LeagueRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: LeagueRoute.getValueFromProps(props),
      defaultRoundId: parseInt(
        parse(props.location.search.substr(1)).segment,
        10
      )
    };
  }

  static getValueFromProps = props => {
    const { league, location } = props;
    const fastest = league && league.type && league.type.name === 'fastest';
    const path = location.pathname;
    if (path.includes('/standings')) return 1;
    if (path.includes('/invite')) return 2;
    if (!fastest) return 1;
    return 0;
  };

  static getDerivedStateFromProps = nextProps => ({
    value: LeagueRoute.getValueFromProps(nextProps)
  });

  handleChange = value => {
    const {
      history,
      league: { id, slug, type }
    } = this.props;
    const fastest = type && type.name === 'fastest';
    if (!fastest || value) history.push(Routes.leagueStandings(id, slug));
    else history.push(Routes.league(id, slug));
  };

  async componentDidMount() {
    const { fetchLeague, match } = this.props;
    await fetchLeague(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match, league, history } = this.props;
    if (!match.params.slug && !prevProps.league && league) {
      history.push(Routes.league(league.id, league.slug));
    }
  }

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

  invite = () => {
    const {
      history,
      league: { id, slug }
    } = this.props;
    history.push(Routes.leagueInvite(id, slug));
  };

  render() {
    const { value, defaultRoundId } = this.state;
    const { user, league, rounds, roundError } = this.props;

    const startDate =
      league &&
      new Date(rounds.length ? last(rounds).endDate : league.startDate);

    const fastest = league && league.type && league.type.name === 'fastest';

    return (
      <Style.Container>
        <AppBar
          color="default"
          title={league && league.name}
          left={
            league && (
              <AddSegmentDialog leagueId={league.id} startDate={startDate} />
            )
          }
          right={<JoinLeagueButton leagueId={league && league.id} />}
        >
          <Tabs
            value={value}
            onChange={(e, v) => this.handleChange(v)}
            centered
            fullWidth
          >
            <Tab
              label="Segments"
              style={{ display: fastest ? 'inline-flex' : 'none' }}
            />
            <Tab label="Standings" />
            <Tab label="Invite" style={{ display: 'none' }} />
          </Tabs>
        </AppBar>

        <SwipeableViews index={value} onChangeIndex={i => this.handleChange(i)}>
          <div>
            {fastest && (
              <div>
                {roundError && <ErrorMessage>{roundError}</ErrorMessage>}
                {rounds.map(round => (
                  <SegmentCard
                    {...round}
                    key={round.id}
                    owner={user.id === league.userId}
                    onOpen={this.segmentOnOpen}
                    onClose={this.segmentOnClose}
                    defaultOpen={round.id === defaultRoundId}
                  >
                    <LeagueStandings leagueId={league.id} roundId={round.id} />
                  </SegmentCard>
                ))}
                {!rounds.length && (
                  <div>
                    <Typography align="center">
                      This league has no segments.
                    </Typography>

                    {league && (
                      <AddSegmentDialog
                        leagueId={league.id}
                        startDate={startDate}
                      >
                        {onOpen => (
                          <Div marginTop="1rem" textAlign="center">
                            <Button
                              variant="raised"
                              color="primary"
                              onClick={onOpen}
                            >
                              Add a segment
                            </Button>
                          </Div>
                        )}
                      </AddSegmentDialog>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <LeagueStandings leagueId={league && league.id} />

          <LeagueInvite />
        </SwipeableViews>

        <LeagueInviteBanner onClick={this.invite} />
      </Style.Container>
    );
  }
}

export default connect(
  (state, props) => ({
    league: getLeague(state, props.match.params.id),
    rounds: getRounds(state),
    user: getAuthUser(state),
    roundError: getRoundError(state)
  }),
  leagueActions
)(LeagueRoute);
