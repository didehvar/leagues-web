import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Home from '../Home/Home';
import Create from '../Create/Create';

const styleSheet = createStyleSheet('Router', theme => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    'flex-direction': 'column'
  },
  container: {
    'flex-grow': 1,
    display: 'flex',
    'justify-content': 'center'
  }
}));

function Router({ children, classes }) {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
        </div>

        {children}
      </div>
    </BrowserRouter>
  );
}

export default withStyles(styleSheet)(Router);
