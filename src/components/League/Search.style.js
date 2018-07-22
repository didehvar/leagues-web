import styled from 'styled-components';

export const Container = styled.div`
  padding: ${props => props.theme.spacing.page};
  margin: 0 0 7rem;
`;

export const SearchInput = styled.div`
  margin-bottom: 1rem;
`;

export const AddFab = styled.div`
  position: absolute;
  bottom: 0;
  right: ${props => props.theme.spacing.unit * 2}px;
  z-index: 10;
`;
