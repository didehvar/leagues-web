import { connect } from 'react-redux';

import { logout, getUserAuthenticated } from '../../ducks/users';
import Settings from './Settings';

export default connect(
  state => ({ authenticated: getUserAuthenticated(state) }),
  { logout },
)(Settings);
