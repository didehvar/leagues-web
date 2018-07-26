import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import RunIcon from '@material-ui/icons/DirectionsRun';
import BikeIcon from '@material-ui/icons/DirectionsBike';
import TimerIcon from '@material-ui/icons/Timer';
import ShowChartIcon from '@material-ui/icons/ShowChart';

import config from '../../utils/config';
import routes from '../../utils/routes';
import { formatDate } from '../../utils/helpers';
import ClickableCard from '../UI/ClickableCard';

import { Chip } from './LeagueCard.style';

class LeagueCard extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    discipline: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { history, id } = this.props;
    history.push(routes.league.pathWith(id));
  };

  render() {
    const { name, startDate, discipline, type } = this.props;

    return (
      <ClickableCard onClick={this.onClick}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {name.length > 90 ? `${name.substring(0, 90)}...` : name}
          </Typography>

          <Typography variant="subheading" color="textSecondary" paragraph>
            {formatDate(startDate)}
          </Typography>

          <Chip
            avatar={
              <Avatar>
                {discipline === config.leagues.running ? (
                  <RunIcon />
                ) : (
                  <BikeIcon />
                )}
              </Avatar>
            }
            label={discipline}
          />

          <Chip
            avatar={
              <Avatar>
                {type === config.leagues.distance ? (
                  <ShowChartIcon />
                ) : (
                  <TimerIcon />
                )}
              </Avatar>
            }
            label={type}
          />
        </CardContent>
      </ClickableCard>
    );
  }
}

export default withRouter(LeagueCard);
