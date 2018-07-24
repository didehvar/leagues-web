import React from 'react';

import Spacer from '../UI/Spacer';
import MobileFullPage from '../UI/MobileFullPage';
import LoginButton from '../Auth/LoginButton';

import poweredByStrava from './assets/home.strava-powered-white.svg';

import { Text, PoweredByImg } from './Home.style';

class Home extends React.PureComponent {
  render() {
    return (
      <MobileFullPage
        footer={<PoweredByImg src={poweredByStrava} alt="Powered by Strava" />}
      >
        <Text variant="display2">Impendulo</Text>

        <Text variant="subheading">
          The unofficial league builder for Strava athletes
        </Text>

        <Spacer />

        <LoginButton />
      </MobileFullPage>
    );
  }
}

export default Home;
