import withTransition from '../hocs/withTransition';

import LeaguePage from './League';
import SettingsPage from './Settings';

export const League = withTransition(LeaguePage);
export const Settings = withTransition(SettingsPage);
