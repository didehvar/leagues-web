import React, { Component } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker/locale/en_GB'; // TODO: remove
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import Dialog from '../Dialog';
import SearchField from '../SearchField';

import * as Style from './style';

class SegmentSelector extends Component {
  state = { open: false };

  handleOpenDialog = () => this.setState({ open: true });

  handleCloseDialog = () => this.setState({ open: false });

  handleSelect = segmentId => () => {
    this.props.onSelect(segmentId);
    this.handleCloseDialog();
  };

  render() {
    const { open } = this.state;
    const { starred, segments, onSelect, ...rest } = this.props;

    return (
      <Button raised color="primary" onClick={this.handleOpenDialog} {...rest}>
        {starred ? 'View starred segments' : 'Search for segment'}

        <Dialog
          name={starred ? 'Starred segments' : 'Find a segment'}
          open={open}
          onClose={this.handleCloseDialog}
          closeButton={false}
          wrapperPadding="0.5rem"
          fullWidthTitle
        >
          {!starred &&
            <Style.Search>
              <SearchField />
            </Style.Search>}
          <List dense>
            {Array(10).fill().map(() =>
              <ListItem
                button
                divider
                onClick={this.handleSelect(faker.random.number())}
              >
                <ListItemIcon>
                  {faker.random.boolean() ? <RunIcon /> : <BikeIcon />}
                </ListItemIcon>
                <ListItemText primary={faker.company.companyName()} />
              </ListItem>
            )}
          </List>
        </Dialog>
      </Button>
    );
  }
}
SegmentSelector.propTypes = {};

SegmentSelector.defaultProps = {};

export default SegmentSelector;
