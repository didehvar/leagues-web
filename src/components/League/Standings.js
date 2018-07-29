import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import Spacer from '../UI/Spacer';

import { ListItemText, PointsBadge } from './Standings.style';

class StandingItem extends React.PureComponent {
  render() {
    const { index, avatar, firstname, lastname, points } = this.props;

    return (
      <ListItem>
        <PointsBadge
          badgeContent={points}
          color="primary"
          index={points > 0 && index}
        >
          <Avatar src={avatar} />
        </PointsBadge>

        <ListItemText primary={firstname} secondary={lastname} />
      </ListItem>
    );
  }
}

class Standings extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    points: PropTypes.array,
  };

  static defaultProps = {
    title: undefined,
    points: [],
  };

  render() {
    const { title, points, ...props } = this.props;

    if (!points.length) return null;

    return (
      <List {...props}>
        {title ? (
          <ListSubheader disableSticky color="primary">
            {title}
          </ListSubheader>
        ) : (
          <Spacer padding={8} />
        )}

        {points.map((point, index) => (
          <StandingItem key={point.id} {...point} index={index} />
        ))}
      </List>
    );
  }
}

export default Standings;
