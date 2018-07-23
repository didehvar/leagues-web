import React from 'react';
import PropTypes from 'prop-types';

import { Container, Img } from './ProgressiveImage.style';

class ProgressiveImage extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
  };

  state = { ready: false };
  mounted = false;

  componentWillMount() {
    this.mounted = true;
    const buffer = new Image();
    buffer.onload = () => this.mounted && this.setState({ ready: true });
    buffer.src = `${window.location.origin}${this.props.src}`;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { src, thumb } = this.props;
    const { ready } = this.state;

    return (
      <Container>
        {ready ? <Img original src={src} /> : null}
        <Img src={thumb} ready={ready} />
      </Container>
    );
  }
}

export default ProgressiveImage;
