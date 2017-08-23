import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { getFlag } from '../../utils/flags';
import Routes from '../../utils/routes';

import * as Style from './style.js';

function LeagueCard({ id, title, countryCode }) {
  return (
    <Style.Container>
      <Card>
        <Style.FlagContainer>
          <Style.FlagImage src={getFlag(countryCode)} />
        </Style.FlagContainer>
        <CardContent>
          <Typography type="subheading" component="h3">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary" component={Link} to={Routes.league(id)}>
            View
          </Button>
          <Button dense color="accent">
            Join
          </Button>
        </CardActions>
      </Card>
    </Style.Container>
  );
}

export default LeagueCard;

LeagueCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired
};

LeagueCard.defaultProps = {
  countryCode: 'gb'
};
