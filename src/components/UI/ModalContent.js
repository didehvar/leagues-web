import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 350px;
  position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: scroll;
  max-height: 500px;

  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: ${props => props.theme.shadows[5]};
  padding: 1em;
`;

class ModalContent extends React.PureComponent {
  render() {
    const { children } = this.props;

    return <Content>{children}</Content>;
  }
}

export default ModalContent;
