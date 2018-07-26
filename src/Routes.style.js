import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
`;

export const Content = styled(Container)`
  margin-bottom: 56px;

  ${props => props.theme.breakpoints.up('md')} {
    margin-bottom: 0;
  }
`;
