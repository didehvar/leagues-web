import React from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import Link from 'react-router-dom/Link';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  position: fixed;
  right: ${props => props.theme.spacing.unit * 2}px;
  bottom: ${props => props.theme.spacing.unit * 9}px;

  ${props => props.theme.breakpoints.up('md')} {
    left: auto;
    bottom: ${props => props.theme.spacing.unit * 2}px;
    transform: none;
  }
`;
class FloatingActionButton extends React.PureComponent {
  state = { scrolling: true };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.startScrollTimeout();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  startScrollTimeout = () =>
    (this.scrollTimeout = setTimeout(
      () => this.setState({ scrolling: false }),
      100,
    ));

  handleScroll = throttle(() => {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    this.setState({ scrolling: true });
    this.startScrollTimeout();
  }, 100);

  render() {
    const { scrolling } = this.state;
    const { icon: Icon, children, ...props } = this.props;

    return (
      <Container>
        <Zoom in={!scrolling}>
          <Button variant="extendedFab" color="primary" {...props}>
            {Icon && <Icon style={{ marginRight: 8 }} />}
            {children}
          </Button>
        </Zoom>
      </Container>
    );
  }
}

export default FloatingActionButton;
