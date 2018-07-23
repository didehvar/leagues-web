import React from 'react';
import PropTypes from 'prop-types';

import { Container, Img } from './ProgressiveImage.style';

class ProgressiveImage extends React.PureComponent {
  static propTypes = {
    background: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    position: PropTypes.string,
  };

  static defaultProps = {
    position: 'center center',
  };

  state = { ready: false };
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    const buffer = new Image();
    buffer.onload = () => this.mounted && this.setState({ ready: true });
    buffer.src = `${window.location.origin}${this.props.src}`;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { background, src, thumb, position } = this.props;
    const { ready } = this.state;

    if (background) {
      return (
        <Container
          background
          position={position}
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
