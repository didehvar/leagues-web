import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import JoinLeagueButton from '../../containers/JoinLeagueButton';

import * as Style from './style.js';

function LeagueCard({ league, onView, ...rest }) {
  const { id, slug, name, discipline, countryCode } = league;

  return (
    <Card {...rest} component={Style.Card}>
      <ButtonBase onClick={() => onView(id, slug)}>
        <Typography type="subheading" component={Style.Heading}>
          {name}
        </Typography>
      </ButtonBase>
      <Style.Actions>
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
          dense
          color="accent"
          component={Style.Button}
          leagueId={id}
        >
          Join
        </JoinLeagueButton>
      </Style.Actions>
    </Card>
  );
}

export default LeagueCard;

LeagueCard.propTypes = {
  onView: PropTypes.func.isRequired
};
