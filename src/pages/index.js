import withTransitionDiv from '../hocs/withTransitionDiv';

import AuthPage from './Auth';
import FeedPage from './Feed';
import HomePage from './Home';
import LeaguePage from './League';
import SettingsPage from './Settings';

export const Auth = withTransitionDiv(AuthPage);
export const Feed = withTransitionDiv(FeedPage);
export const Home = withTransitionDiv(HomePage);
export const League = withTransitionDiv(LeaguePage);
export const Settings = withTransitionDiv(SettingsPage);
