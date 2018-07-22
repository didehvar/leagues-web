import withTransition from '../hocs/withTransition';

import FeedPage from './Feed';
import LeaguePage from './League';
import SettingsPage from './Settings';

export const Feed = withTransition(FeedPage);
export const League = withTransition(LeaguePage);
export const Settings = withTransition(SettingsPage);
