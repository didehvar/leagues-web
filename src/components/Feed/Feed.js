import React from 'react';
import Typography from '@material-ui/core/Typography';

import List from '../League/List.container';

import { Container } from './Feed.style';

class Feed extends React.PureComponent {
  render() {
    const { userId } = this.props;

    return (
      <Container>
        <Typography paragraph variant="headline">
          My leagues
        </Typography>

        <List userId={userId} />
      </Container>
    );
  }
}

export default Feed;
