import styled from 'styled-components';
import NavLink from 'react-router-dom/NavLink';

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

export const Content = styled.nav`
  flex-grow: 1;
`;

const activeClassName = 'nav-item-active';
export const Link = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} span,
  &.${activeClassName} svg {
    color: ${props => props.theme.palette.primary.main};
    font-weight: 500;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  ${props => props.theme.mixins.toolbarPx};
`;
