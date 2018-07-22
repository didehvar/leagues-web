import { connect } from 'react-redux';

import { getCurrentUserId } from '../../ducks/users';
import Feed from './Feed';

export default connect(state => ({ userId: getCurrentUserId(state) }))(Feed);
