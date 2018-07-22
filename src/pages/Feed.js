import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import Loading from '../components/Loading';

const Feed = Loadable({
  loader: () => import('../components/Feed'),
  loading: Loading,
});

const FeedPage = ({ match: { path } }) => (
  <Switch>
    <Route exact path={path} component={Feed} />
  </Switch>
);

export default FeedPage;
