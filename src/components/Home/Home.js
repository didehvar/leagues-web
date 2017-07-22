import React from 'react';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Home', theme => ({
  wrapper: {
    display: 'flex'
  },
  button: {
    'align-self': 'center'
  }
}));

function Home({ classes }) {
  return (
    <div className={classes.wrapper}>
      <Button className={classes.button} raised color="primary">
        Login
      </Button>
    </div>
  );
}

export default withStyles(styleSheet)(Home);
