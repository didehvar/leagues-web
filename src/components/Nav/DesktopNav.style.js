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

const activeClassName = 'nav-item-active';
export const Link = styled(NavLink).attrs({
  activeClassName,
})`
  &.${activeClassName} span {
    color: ${props => props.theme.palette.primary.main};
    font-weight: 500;
  }
`;
