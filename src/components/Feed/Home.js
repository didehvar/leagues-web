import React from 'react';
import Typography from '@material-ui/core/Typography';

import LoginButton from './LoginButton';

import { Container } from './Home.style';

class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <Typography gutterBottom variant="display1">
          Impendulo
        </Typography>

        <Typography paragraph variant="subheading">
          The unofficial league builder for Strava athletes
        </Typography>

        <LoginButton />
      </Container>
    );
  }
}

export default Home;
