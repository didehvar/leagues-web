import React from 'react';
import random from 'lodash/random';

import cycle216027 from './assets/backgrounds/cycle.un216027.jpg';
import cycle216027Thumb from './assets/backgrounds/cycle.un216027.thumb.jpg';
import cycle439410 from './assets/backgrounds/cycle.un439410.jpg';
import cycle439410Thumb from './assets/backgrounds/cycle.un439410.thumb.jpg';
import cycle598614 from './assets/backgrounds/cycle.un598614.jpg';
import cycle598614Thumb from './assets/backgrounds/cycle.un598614.thumb.jpg';
import cycle681403 from './assets/backgrounds/cycle.un681403.jpg';
import cycle681403Thumb from './assets/backgrounds/cycle.un681403.thumb.jpg';

import run5581 from './assets/backgrounds/run.un5581.jpg';
import run5581Thumb from './assets/backgrounds/run.un5581.thumb.jpg';
import run418618 from './assets/backgrounds/run.un418618.jpg';
import run418618Thumb from './assets/backgrounds/run.un418618.thumb.jpg';
import run553145 from './assets/backgrounds/run.un553145.jpg';
import run553145Thumb from './assets/backgrounds/run.un553145.thumb.jpg';

import ProgressiveImage from './ProgressiveImage';

import {
  Container,
  Background,
  Wrapper,
  CenterWrapper,
  Footer,
} from './MobileFullPage.style';

class MobileFullPage extends React.PureComponent {
  images = [
    { src: cycle216027, thumb: cycle216027Thumb, position: 'center bottom' },
    {
      src: cycle439410,
      thumb: cycle439410Thumb,
      position: 'center bottom',
      positionMd: 'center center',
    },
    { src: cycle598614, thumb: cycle598614Thumb, position: '75% bottom' },
    { src: cycle681403, thumb: cycle681403Thumb, position: 'center bottom' },

    { src: run5581, thumb: run5581Thumb, position: 'center top' },
    { src: run418618, thumb: run418618Thumb, position: 'center bottom' },
    { src: run553145, thumb: run553145Thumb, position: 'center bottom' },
  ];

  constructor(props) {
    super(props);

    this.state = {
      ...this.images[random(this.images.length - 1)],
    };
  }

  render() {
    const { ...state } = this.state;
    const { children, footer } = this.props;

    return (
      <Container>
        <Background>
          <ProgressiveImage background {...state} />
        </Background>

        <Wrapper>
          <CenterWrapper>{children}</CenterWrapper>
        </Wrapper>

        <Footer>{footer}</Footer>
      </Container>
    );
  }
}

export default MobileFullPage;
