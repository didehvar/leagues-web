import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: scroll;
`;

export const Content = styled(Container)`
  margin: 56px 0;

  ${props => props.theme.breakpoints.up('md')} {
    margin-top: 64px;
    margin-bottom: 0;
  }
`;
