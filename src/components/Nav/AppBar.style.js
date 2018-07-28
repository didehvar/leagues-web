import React from 'react';
import styled, { css } from 'styled-components';
import MuiToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';

export const Flex = styled.div`
  flex-grow: 1;
`;

export const Toolbar = styled(MuiToolbar)`
  max-width: ${props => props.theme.spacing.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const IconButonMenu = styled(IconButton)`
  display: none;

  ${props => props.theme.breakpoints.up('md')} {
    display: block;
    margin-left: -12px;
    margin-right: 20px;
  }
`;

export const Title = styled(Typography)`
  a,
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    filter: brightness(90%);
  }
`;

export const Actions = styled.div`
  display: none;

  ${props => props.theme.breakpoints.up('md')} {
    display: block;
  }
`;

export const List = styled(MuiList)`
  width: 250px;
`;

export const ListItem = styled(({ active, ...props }) => (
  <MuiListItem {...props} />
))`
  span {
    ${props =>
      props.active &&
      css`
        color: ${props.theme.palette.primary.main};
        font-weight: 500;
      `};
  }
`;
