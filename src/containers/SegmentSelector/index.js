import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import * as segmentActions from '../../actions/segments';
import { getStarredSegments } from '../../reducers';

import Dialog from '../../components/Dialog';
import SearchField from '../../components/SearchField';

import * as Style from './style';

class SegmentSelector extends Component {
  static propTypes = {
    starred: PropTypes.bool,
    onSelect: PropTypes.func.isRequired
  };

  static defaultProps = {
    starred: false
  };

  state = { open: false };

  handleOpenDialog = () => this.setState({ open: true });

  handleCloseDialog = () => this.setState({ open: false });

  handleSelect = segmentId => () => {
    this.props.onSelect(segmentId);
    this.handleCloseDialog();
  };

  componentDidMount() {
    const { starred, fetchStarredSegments } = this.props;
    if (starred) fetchStarredSegments();
  }

  render() {
    const { open } = this.state;
    const {
      starred,
      onSelect,
      fetchStarredSegments,
      starredSegments,
      ...rest
    } = this.props;

    return (
      <Button raised color="primary" onClick={this.handleOpenDialog} {...rest}>
        {starred ? 'View starred segments' : 'Search for segment'}

        <Dialog
          name={starred ? 'Starred segments' : 'Find a segment'}
          open={open}
          onClose={this.handleCloseDialog}
          closeButton={false}
        >
          {!starred && (
            <Style.Search>
              <SearchField />
            </Style.Search>
          )}
          <List dense>
            {starredSegments.map(segment => (
              <ListItem
                key={segment.id}
                button
                divider
                onClick={this.handleSelect(segment.id)}
              >
                <ListItemIcon>
                  {segment.activity_type === 'Run' ? <RunIcon /> : <BikeIcon />}
                </ListItemIcon>
                <ListItemText primary={segment.name} />
              </ListItem>
            ))}
          </List>
        </Dialog>
      </Button>
    );
  }
}

export default connect(
  state => ({ starredSegments: getStarredSegments(state) }),
  segmentActions
)(SegmentSelector);
