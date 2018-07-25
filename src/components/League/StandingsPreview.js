import React from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

import { getLeaguePoints } from '../../ducks/leagues';

import {
  TopStandings,
  AllStandings,
  StandingsList,
  PointsBadge,
  ListItemWrap,
} from './StandingsPreview.style';

class StandingItem extends React.PureComponent {
  render() {
    const { index, id, avatar, firstname, lastname, points } = this.props;

    return (
      <ListItem disableGutters>
        <ListItemAvatar>
          <PointsBadge badgeContent={points} color="primary" index={index}>
            <Avatar src={avatar} />
          </PointsBadge>
        </ListItemAvatar>

        <ListItemWrap primary={firstname} secondary={lastname} />
      </ListItem>
    );
  }
}

class StandingsPreview extends React.PureComponent {
  render() {
    const { users } = this.props;

    return (
      <ExpansionPanel>
        <TopStandings expandIcon={<ExpandMoreIcon />}>
          <StandingsList dense>
            {users
              .slice(0, 3)
              .map((user, index) => (
                <StandingItem key={user.id} {...user} index={index} />
              ))}
          </StandingsList>
        </TopStandings>

        <Divider />

        <AllStandings>
          <StandingsList dense>
            {users
              .slice(3, 10)
              .map((user, index) => <StandingItem key={user.id} {...user} />)}
          </StandingsList>
        </AllStandings>

        <Divider />

        <ExpansionPanelActions>
          <Button size="small" color="primary">
            View all standings
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

export default connect((state, ownProps) => ({
  users: getLeaguePoints(state, ownProps.pointIds),
}))(StandingsPreview);
