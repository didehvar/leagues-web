import React from 'react';
import random from 'lodash/random';

import cycle216027 from './assets/backgrounds/cycle.un216027.jpg';
import cycle216027Thumb from './assets/backgrounds/cycle.un216027.thumb.jpg';
import cycle311391 from './assets/backgrounds/cycle.un311391.jpg';
import cycle311391Thumb from './assets/backgrounds/cycle.un311391.thumb.jpg';
import cycle439410 from './assets/backgrounds/cycle.un439410.jpg';
import cycle439410Thumb from './assets/backgrounds/cycle.un439410.thumb.jpg';
import cycle598614 from './assets/backgrounds/cycle.un598614.jpg';
import cycle598614Thumb from './assets/backgrounds/cycle.un598614.thumb.jpg';
import cycle681403 from './assets/backgrounds/cycle.un681403.jpg';
import cycle681403Thumb from './assets/backgrounds/cycle.un681403.thumb.jpg';

import running5581 from './assets/backgrounds/run.un5581.jpg';
import running5581Thumb from './assets/backgrounds/run.un5581.thumb.jpg';
import running418618 from './assets/backgrounds/run.un418618.jpg';
import running418618Thumb from './assets/backgrounds/run.un418618.thumb.jpg';
import running553145 from './assets/backgrounds/run.un553145.jpg';
import running553145Thumb from './assets/backgrounds/run.un553145.thumb.jpg';

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
    { image: cycle216027, thumb: cycle216027Thumb, position: 'center bottom' },
    { image: cycle311391, thumb: cycle311391Thumb, position: 'center bottom' },
    { image: cycle439410, thumb: cycle439410Thumb, position: 'center top' },
    { image: cycle598614, thumb: cycle598614Thumb, position: 'right bottom' },
    { image: cycle681403, thumb: cycle681403Thumb, position: 'center bottom' },

    { image: running5581, thumb: running5581Thumb, position: 'center top' },
    { image: running418618, thumb: running418618Thumb, position: 'center top' },
    { image: running553145, thumb: running553145Thumb, position: 'center top' },
  ];

  constructor(props) {
    super(props);

    const { image, thumb, position } = this.images[
      random(this.images.length - 1)
    ];
    this.state = {
      image,
      thumb,
      position,
    };
  }

  render() {
    const { image, thumb, position } = this.state;
    const { children, footer } = this.props;

    return (
      <Container>
        <Background>
          <ProgressiveImage
            background
            src={image}
            thumb={thumb}
            position={position}
          />
        </Background>
        {/* <HeroImage>
          <ProgressiveImage thumb={previewImage} src={fullImage} />
        </HeroImage> */}

        <Wrapper>
          <CenterWrapper>{children}</CenterWrapper>
        </Wrapper>

        <Footer>{footer}</Footer>
      </Container>
    );
  }
}

export default MobileFullPage;
