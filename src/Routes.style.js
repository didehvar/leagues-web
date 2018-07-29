import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 56px 0;

  ${props => props.theme.breakpoints.up('md')} {
    margin-top: 64px;
    margin-bottom: 0;
  }
`;
