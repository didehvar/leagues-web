import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';

import * as Style from './style.js';

function LeagueCard({ id, title, countryCode, onView, onJoin, ...rest }) {
  return (
    <Card {...rest}>
      <Style.FlagContainer>
        <Style.FlagImage
          src={`${process.env.PUBLIC_URL}/flags/${countryCode}.png`}
        />
      </Style.FlagContainer>
      <CardContent>
        <Typography type="subheading" component="h3">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary" onClick={onView}>
          View
        </Button>
        <Button dense color="accent" onClick={onJoin}>
          Join
        </Button>
      </CardActions>
    </Card>
  );
}

export default LeagueCard;

LeagueCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  onView: PropTypes.func.isRequired,
  onJoin: PropTypes.func.isRequired
};

LeagueCard.defaultProps = {
  countryCode: 'gb'
};
