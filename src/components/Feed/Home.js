import React from 'react';

import Spacer from '../UI/Spacer';
import ProgressiveImage from '../UI/ProgressiveImage';
import LoginButton from './LoginButton';

import previewImage from './assets/home.bg.mobile.20.jpg';

import { Container, HeroImage, Wrapper, Text } from './Home.style';

class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <HeroImage>
          <ProgressiveImage
            thumb={previewImage}
            src={`${process.env.PUBLIC_URL}/home.bg.mobile.jpg`}
          />
        </HeroImage>

        <Wrapper>
          <Text variant="display2">Impendulo</Text>

          <Text variant="subheading">
            The unofficial league builder for Strava athletes
          </Text>

          <Spacer />

          <LoginButton />
        </Wrapper>
      </Container>
    );
  }
}

export default Home;
