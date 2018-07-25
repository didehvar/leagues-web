import styled from 'styled-components';

export const Container = styled.div`
  ${props => props.theme.breakpoints.up('md')} {
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  padding-left: 24px;
  flex-direction: column;
  justify-content: center;

  ${props => props.theme.mixins.toolbarPx};
`;
