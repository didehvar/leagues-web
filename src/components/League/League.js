import React from 'react';
import Link from 'react-router-dom/Link';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GroupAdd from '@material-ui/icons/GroupAdd';

import routes from '../../utils/routes';
import RoundListItem from './RoundListItem';
import Standings from './Standings';
import Spacer from '../UI/Spacer';
import FloatingActionButton from '../UI/FloatingActionButton';

import { Center, Right } from './League.style';

class League extends React.PureComponent {
  joinLeague = () => this.props.joinLeague(this.props.league.id);

  render() {
    const {
      league,
      rounds,
      points,
      isOwner,
      isParticipating,
      isFetching,
      isAuthenticated,
    } = this.props;

    if (!league || isFetching) return false;

    return (
      <React.Fragment>
        <Standings
          title="Top Standings"
          limit={3}
          points={points}
          type={league.type}
          hideResult
          hideColumns
        />

        <Spacer padding={4} />

        <Right>
          <Button
            size="small"
            component={Link}
            to={routes.leagueStandings.pathWith(league.id)}
          >
            View all standings
          </Button>
        </Right>

        <Spacer padding={4} />

        {points && points.length > 0 && <Divider />}

        {rounds.length > 0 ? (
          <List>
            <ListSubheader disableSticky color="primary">
              Rounds
            </ListSubheader>
            {rounds.map(r => <RoundListItem key={r.id} {...r} />)}
          </List>
        ) : (
          <Center>
            <Typography paragraph>
              This league doesn&apos;t have any rounds yet.
            </Typography>

            {isOwner && (
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to={routes.roundCreate.pathWith(league.id)}
              >
                Create round
              </Button>
            )}
          </Center>
        )}

        {isAuthenticated &&
          !isParticipating && (
            <FloatingActionButton onClick={this.joinLeague} icon={GroupAdd}>
              Join
            </FloatingActionButton>
          )}
      </React.Fragment>
    );
  }
}

export default League;
