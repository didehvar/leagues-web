import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Home from '../Home/Home';
import Create from '../Create/Create';
import CreateSegments from '../Create/CreateSegments';
import Search from '../Search/Search';

const styleSheet = createStyleSheet('Router', theme => ({
  wrapper: {
    display: 'flex',
    'min-height': '100vh',
    'flex-direction': 'column'
  },
  container: {
    'flex-grow': 1,
    display: 'flex',
    'justify-content': 'center',
    'max-width': '90vw'
  }
}));

function Router({ children, classes }) {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/create/segments" component={CreateSegments} />
          <Route exact path="/search" component={Search} />
        </div>

        {children}
      </div>
    </BrowserRouter>
  );
}

export default withStyles(styleSheet)(Router);
