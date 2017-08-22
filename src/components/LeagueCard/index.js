import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { getFlag } from '../../utils/flags';

import * as Style from './style.js';

function LeagueCard({ countryCode }) {
  return (
    <Style.Container>
      <Card>
        <Style.FlagContainer>
          <Style.FlagImage src={getFlag(countryCode)} />
        </Style.FlagContainer>
        <CardContent>
          <Typography type="subheading" component="h3">
            Suspendisse posuere tellus sit amet tortor mollis vulputate
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
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

LeagueCard.defaultProps = {
  countryCode: 'gb'
};
