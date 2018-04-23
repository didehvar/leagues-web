import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import JoinLeagueButton from '../../containers/JoinLeagueButton';

import * as Style from './style.js';

function LeagueCard({ league, onView, ...rest }) {
  const { id, slug, name, discipline, countryCode } = league;

  return (
    <Card {...rest} component={Style.Card}>
      <ButtonBase onClick={() => onView(id, slug)}>
        <CardContent>
          <Typography type="subheading" component={Style.Heading}>
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
  onView: PropTypes.func.isRequired
};
