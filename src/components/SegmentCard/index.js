import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ButtonBase from 'material-ui/ButtonBase';

import DateRange from '../DateRange';

import * as Style from './style.js';

function SegmentCard({ id, name, startDate, endDate }) {
  return (
    <Style.Container>
      <ButtonBase component={Style.Button}>
        <Card>
          <CardContent>
            <Typography type="title" component="h1">
              {name}
            </Typography>
            <Typography type="subheading" component="h3">
              <DateRange start={startDate} end={endDate} />
            </Typography>
          </CardContent>
        </Card>
      </ButtonBase>
    </Style.Container>
  );
}

export default SegmentCard;

SegmentCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired
};

SegmentCard.defaultProps = {};
