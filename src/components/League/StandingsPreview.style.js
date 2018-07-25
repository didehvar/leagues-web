import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import List from '@material-ui/core/List';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

export const Star = styled(StarIcon)`
  color: ${props => {
    switch (props.index) {
      case 0:
        return '#e0bd00';
      case 1:
        return '#c0c0c0';
      case 2:
        return '#cd7f32';
      default:
        return 'inherit';
    }
  }};
`;

export const ListItemPoints = styled.div`
  padding-left: 16px;
`;

export const TopStandings = styled(ExpansionPanelSummary)`
  max-width: 100%;

  div {
    max-width: 100%;
    flex-direction: column;
  }
`;

export const AllStandings = styled(ExpansionPanelDetails)`
  padding: 8px 24px;
`;

export const StandingsList = styled(List)`
  max-width: 100%;
`;

export const Name = styled(Typography)`
  word-wrap: break-word;
`;

export const PointsBadge = styled(Badge)`
  margin-right: 8px;

  span {
    font-weight: 500;
    background-color: ${props => {
      switch (props.index) {
        case 0:
          return '#e2bf00';
        case 1:
          return '#c0c0c0';
        case 2:
          return '#cd7f32';
        default:
          return props.theme.palette.primary.main;
      }
    }};
  }
`;
