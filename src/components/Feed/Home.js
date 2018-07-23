import React from 'react';

import Spacer from '../UI/Spacer';
import ProgressiveImage from '../UI/ProgressiveImage';
import LoginButton from './LoginButton';

import previewImage from './assets/home.bg-mobile.20.jpg';
import fullImage from './assets/home.bg-mobile.jpg';
import poweredByStrava from './assets/home.strava-powered-white.svg';

import {
  Container,
  HeroImage,
  Wrapper,
  CenterWrapper,
  Text,
  Footer,
} from './Home.style';

class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <HeroImage>
          <ProgressiveImage thumb={previewImage} src={fullImage} />
        </HeroImage>

        <Wrapper>
          <CenterWrapper>
            <Text variant="display2">Impendulo</Text>

            <Text variant="subheading">
              The unofficial league builder for Strava athletes
            </Text>

            <Spacer />

            <LoginButton />
          </CenterWrapper>
        </Wrapper>

        <Footer>
          <img src={poweredByStrava} alt="Powered by Strava" />
        </Footer>
      </Container>
    );
  }
}

export default Home;
