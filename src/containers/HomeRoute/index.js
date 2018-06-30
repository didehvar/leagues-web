import React from 'react';
import { Div } from 'glamorous';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../reducers';
import LoginButton from '../LoginButton';
import Feed from '../Feed';

class HomeRoute extends React.Component {
  render() {
    const { authenticated, history } = this.props;

    if (!authenticated) {
      return (
        <Div marginTop="40vh" textAlign="center">
          <LoginButton />
        </Div>
      );
    }

    return <Feed history={history} />;
  }
}

export default connect(state => ({
  authenticated: isAuthenticated(state),
}))(HomeRoute);
