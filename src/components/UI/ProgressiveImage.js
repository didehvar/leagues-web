import React from 'react';
import PropTypes from 'prop-types';

import { Container, Img } from './ProgressiveImage.style';

class ProgressiveImage extends React.PureComponent {
  static propTypes = {
    background: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    position: PropTypes.string,
    positionMd: PropTypes.string,
  };

  static defaultProps = {
    position: 'center center',
    positionMd: undefined,
  };

  state = { ready: false };
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    const buffer = new Image();
    buffer.src = `${window.location.origin}${this.props.src}`;
    buffer.onload = () => this.mounted && this.setState({ ready: true });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { background, src, thumb, position, positionMd } = this.props;
    const { ready } = this.state;

    if (background) {
      return (
        <Container
          background
          position={position}
          positionMd={positionMd}
          src={ready ? src : thumb}
          ready={ready}
        />
      );
    }

    return (
      <Container>
        {ready ? <Img original src={src} /> : null}
        <Img src={thumb} ready={ready} />
      </Container>
    );
  }
}

export default ProgressiveImage;
