import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Typography from '@material-ui/core/Typography';

const Link = styled(Typography)`
  color: ${props => props.theme.palette.strava};

  &:hover {
    color: ${props => lighten(0.2, props.theme.palette.strava)};
  }
`;

class StravaLink extends React.PureComponent {
  render() {
    const { segmentId } = this.props;

    return (
      <Link
        align="right"
        component="a"
        href={`https://www.strava.com/segments/${segmentId}`}
      >
        View on Strava
      </Link>
    );
  }
}

export default StravaLink;
