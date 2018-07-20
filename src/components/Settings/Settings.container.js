import { connect } from 'react-redux';

import { logout } from '../../actions/auth';
import { isAuthenticated } from '../../reducers';
import Settings from './Settings';

export default connect(
  state => ({ authenticated: isAuthenticated(state) }),
  { logout }
)(Settings);
