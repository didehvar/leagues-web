import { connect } from 'react-redux';

import { logout } from '../../ducks/users';
import Settings from './Settings';

export default connect(
  null,
  { logout },
)(Settings);
