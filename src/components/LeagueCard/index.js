import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import RunIcon from 'material-ui-icons/DirectionsRun';
import BikeIcon from 'material-ui-icons/DirectionsBike';

import * as Style from './style.js';

function LeagueCard({ league, onView, onJoin, ...rest }) {
  const { id, slug, name, discipline } = league;

  return (
    <Card {...rest} component={Style.Card}>
      <ButtonBase onClick={() => onView(id, slug)}>
        <Style.Content>
          <Typography type="subheading" component={Style.Heading}>
            <Style.Icon>
              {discipline &&
                (discipline.name === 'run' ? <RunIcon /> : <BikeIcon />)}
            </Style.Icon>
            {name}
          </Typography>
        </Style.Content>
      </ButtonBase>
      <Style.Actions>
        <Button
          dense
          color="accent"
          onClick={e => {
            e.preventDefault();
            onJoin(id, slug);
          }}
        >
          Join
        </Button>
      </Style.Actions>
    </Card>
  );
}

export default LeagueCard;

LeagueCard.propTypes = {
  onView: PropTypes.func.isRequired,
  onJoin: PropTypes.func.isRequired
};
