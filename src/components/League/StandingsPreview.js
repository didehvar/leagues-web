import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import { getLeaguePoints } from '../../ducks/leagues';

import { ListItemText, PointsBadge } from './StandingsPreview.style';

class StandingItem extends React.PureComponent {
  render() {
    const { index, avatar, firstname, lastname, points } = this.props;

    return (
      <ListItem>
        <PointsBadge badgeContent={points} color="primary" index={index}>
          <Avatar src={avatar} />
        </PointsBadge>

        <ListItemText primary={firstname} secondary={lastname} />
      </ListItem>
    );
  }
}

class StandingsPreview extends React.PureComponent {
  render() {
    const { users } = this.props;

    if (!users.length) return null;

    return (
      <List>
        <ListSubheader disableSticky color="primary">
          Top Standings
        </ListSubheader>

        {users.map((user, index) => (
          <StandingItem key={user.id} {...user} index={index} />
        ))}
      </List>
    );
  }
}

export default connect((state, ownProps) => ({
  users: getLeaguePoints(state, ownProps.pointIds).slice(0, ownProps.limit),
}))(StandingsPreview);
