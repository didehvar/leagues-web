import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { formatDate } from '../../utils/helpers';
import StravaLink from '../UI/StravaLink';
import Standings from './Standings';

class Round extends React.PureComponent {
  render() {
    const { name, startDate, endDate, points, segment, type } = this.props;

    return (
      <React.Fragment>
        <Card>
          <CardContent>
            <Typography variant="headline">{name}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {formatDate(startDate, endDate)}
            </Typography>

            <Typography variant="subheading" color="textSecondary" gutterBottom>
              {segment.name}
            </Typography>

            <Typography>
              <StravaLink segmentId={segment.stravaId} />
            </Typography>
          </CardContent>
        </Card>

        <Standings points={points} type={type} />
      </React.Fragment>
    );
  }
}

export default Round;
