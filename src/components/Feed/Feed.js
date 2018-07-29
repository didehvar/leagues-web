import React from 'react';
import Typography from '@material-ui/core/Typography';

import List from '../League/List.container';

class Feed extends React.PureComponent {
  render() {
    const { userId } = this.props;

    return (
      <React.Fragment>
        <Typography paragraph variant="headline">
          My leagues
        </Typography>

        <List userId={userId} />
      </React.Fragment>
    );
  }
}

export default Feed;
