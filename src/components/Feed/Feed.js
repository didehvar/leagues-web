import React from 'react';
import Typography from '@material-ui/core/Typography';

import List from '../League/List.container';

import { Container } from './Feed.style';

class Feed extends React.PureComponent {
  render() {
    return (
      <Container>
        <Typography paragraph variant="headline">
          My leagues
        </Typography>

        <List userId={132030} />
      </Container>
    );
  }
}

export default Feed;
