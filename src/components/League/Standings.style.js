import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import MuiListItemText from '@material-ui/core/ListItemText';

export const ListItemText = styled(MuiListItemText)`
  word-wrap: break-word;
`;

export const PointsBadge = styled(Badge)`
  margin-right: 8px;

  span {
    font-weight: 500;
    background-color: ${props => {
      switch (props.index) {
        case 0:
          return '#efca00';
        case 1:
          return '#808080';
        case 2:
          return '#c7813b';
        default:
          return props.theme.palette.grey[400];
      }
    }};
  }
`;