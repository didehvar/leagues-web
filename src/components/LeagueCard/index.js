import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import RunIcon from '@material-ui/icons/DirectionsRun';
import BikeIcon from '@material-ui/icons/DirectionsBike';
import last from 'lodash/last';
import isAfter from 'date-fns/is_after';

import JoinLeagueButton from '../../containers/JoinLeagueButton';

import * as Style from './style.js';

function LeagueCard({ league, onView, ...rest }) {
  const { id, slug, name, discipline, countryCode, rounds } = league;

  return (
    <Card {...rest} component={Style.Card}>
      <ButtonBase onClick={() => onView(id, slug)}>
        <CardContent>
          <Typography variant="subheading" component={Style.Heading}>
            {name}
          </Typography>
        </CardContent>
      </ButtonBase>

      <CardActions>
        {countryCode && (
          <Style.FlagImage
            src={`${process.env.PUBLIC_URL}/flags/${countryCode}.png`}
          />
        )}

        <Style.Icon>
          {discipline &&
            (discipline.name === 'run' ? <RunIcon /> : <BikeIcon />)}
        </Style.Icon>

        {isAfter((last(rounds) || {}).endDate, new Date()) && (
          <CircularProgress size={20} />
        )}

        <JoinLeagueButton
          size="small"
          color="secondary"
          component={Style.Button}
          leagueId={id}
        >
          Join
        </JoinLeagueButton>
      </CardActions>
    </Card>
  );
}

export default LeagueCard;

LeagueCard.propTypes = {
  onView: PropTypes.func.isRequired,
};
