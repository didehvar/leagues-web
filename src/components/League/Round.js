import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { formatDate } from '../../utils/helpers';
import Spacer from '../UI/Spacer';
import StravaLink from '../UI/StravaLink';
import Standings from './Standings';

class Round extends React.PureComponent {
  render() {
    const { name, startDate, endDate, stravaSegmentId, points } = this.props;

    return (
      <React.Fragment>
        <Spacer padding={12} />
        <Card>
          <CardContent>
            <Typography variant="headline">{name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {formatDate(startDate, endDate)}
            </Typography>

            <StravaLink segmentId={stravaSegmentId} />
          </CardContent>
        </Card>

        <Standings points={points} />
      </React.Fragment>
    );
  }
}

export default Round;
