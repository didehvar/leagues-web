import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ButtonBase from 'material-ui/ButtonBase';
import Done from 'material-ui-icons/Done';
import Cached from 'material-ui-icons/Cached';

import DateRange from '../DateRange';
import Dialog from '../Dialog';

import * as Style from './style.js';

class SegmentCard extends Component {
  state = { open: false };

  handleOpenDialog = () => this.setState({ open: true });

  handleCloseDialog = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { id, name, startDate, endDate, children } = this.props;

    return (
      <Style.Container>
        <ButtonBase component={Style.Button} onClick={this.handleOpenDialog}>
          <Card component={Style.Card}>
            <Style.CardText>
              <Typography type="body2" color="secondary" component="div">
                <Style.CardIcon>
                  {Math.random() > 0.5 ? <Done /> : <Cached />}
                </Style.CardIcon>
                <DateRange start={startDate} end={endDate} />
              </Typography>
              <Typography type="body2">
                {name}
              </Typography>
            </Style.CardText>
          </Card>
        </ButtonBase>
        <Dialog
          name={name}
          open={open}
          onClose={this.handleCloseDialog}
          classes={{ paper: css({ overflow: 'auto', width: '100%' }) }}
          fullScreen
        >
          <Style.DialogContainer>
            {children}
          </Style.DialogContainer>
        </Dialog>
      </Style.Container>
    );
  }
}

export default SegmentCard;

SegmentCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired
};

SegmentCard.defaultProps = {};
