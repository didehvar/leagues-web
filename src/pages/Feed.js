import React from 'react';
import Loadable from 'react-loadable';
import Route from 'react-router-dom/Route';

import routes from '../utils/routes';
import Loading from '../components/UI/Loading';

const Feed = Loadable({
  loader: () => import('../components/Feed'),
  loading: Loading,
});

const FeedPage = () => <Route exact path={routes.feed} component={Feed} />;

export default FeedPage;
