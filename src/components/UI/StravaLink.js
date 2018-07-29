import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const Link = styled.a`
  color: ${props => props.theme.palette.strava};
  text-decoration: none;

  &:hover {
    color: ${props => lighten(0.2, props.theme.palette.strava)};
  }
`;

class StravaLink extends React.PureComponent {
  render() {
    const { segmentId, href, children, ...props } = this.props;

    return (
      <Link
        href={href || `https://www.strava.com/segments/${segmentId}`}
        {...props}
      >
        {children || 'View on Strava'}
      </Link>
    );
  }
}

export default StravaLink;
