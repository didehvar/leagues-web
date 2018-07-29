import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { getStarredSegments } from '../../ducks/leagues/segments';

class SegmentItem extends React.PureComponent {
  onClick = () => this.props.onClick(this.props.id, this.props.name);

  render() {
    const { name, activityType } = this.props;

    return (
      <ListItem button onClick={this.onClick}>
        <ListItemText primary={name} secondary={activityType} />
      </ListItem>
    );
  }
}

class StarredSegments extends React.PureComponent {
  render() {
    const { onSelect, segments } = this.props;

    return (
      <List disablePadding>
        <ListSubheader disableSticky color="primary">
          Your starred segments
        </ListSubheader>

        {segments.map(segment => (
          <SegmentItem key={segment.id} {...segment} onClick={onSelect} />
        ))}
      </List>
    );
  }
}

export default connect(state => ({ segments: getStarredSegments(state) }))(
  StarredSegments,
);
