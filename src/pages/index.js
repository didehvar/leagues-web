import withTransition from '../hocs/withTransition';

import AuthPage from './Auth';
import FeedPage from './Feed';
import HomePage from './Home';
import LeaguePage from './League';
import SettingsPage from './Settings';

export const Auth = withTransition(AuthPage);
export const Feed = withTransition(FeedPage);
export const Home = withTransition(HomePage);
export const League = withTransition(LeaguePage);
export const Settings = withTransition(SettingsPage);
