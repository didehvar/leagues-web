import React from 'react';
import Loadable from 'react-loadable';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/UI/Loading';

const Feed = Loadable({
  loader: () => import('../components/Feed'),
  loading: Loading,
});

const FeedPage = () => (
  <Switch>
    <Route exact path={routes.feed} component={Feed} />
  </Switch>
);

export default FeedPage;
