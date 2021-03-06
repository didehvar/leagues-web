import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: ${props => props.theme.spacing.page};
`;
