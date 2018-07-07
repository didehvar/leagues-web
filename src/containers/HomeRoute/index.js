import React from 'react';
import { Div } from 'glamorous';
import { connect } from 'react-redux';

import { isAuthenticated } from '../../reducers';
import LoginButton from '../LoginButton';
import Feed from '../Feed';
import Typography from '@material-ui/core/Typography';

class HomeRoute extends React.Component {
  render() {
    const { authenticated, history } = this.props;

    if (!authenticated) {
      return (
        <Div textAlign="center" marginTop="30vh">
          <Typography variant="display1" gutterBottom>
            Impendulo
          </Typography>
          <Typography variant="subheading">
            The unofficial league builder for Strava athletes
          </Typography>

          <Div marginTop="5rem">
            <LoginButton />
          </Div>
        </Div>
      );
    }

    return <Feed history={history} />;
  }
}

export default connect(state => ({
  authenticated: isAuthenticated(state),
}))(HomeRoute);
