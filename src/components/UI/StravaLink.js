import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import Typography from '@material-ui/core/Typography';

const Link = styled(Typography)`
  color: ${props => props.theme.palette.strava};
  text-decoration: none;

  &:hover {
    color: ${props => lighten(0.2, props.theme.palette.strava)};
  }
`;

class StravaLink extends React.PureComponent {
  render() {
    const { segmentId, ...props } = this.props;

    return (
      <Link
        component="a"
        href={`https://www.strava.com/segments/${segmentId}`}
        {...props}
      >
        View on Strava
      </Link>
    );
  }
}

export default StravaLink;
