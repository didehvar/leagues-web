import React from 'react';
import { animated } from 'react-spring';
import Route from 'react-router-dom/Route';

import FullPageContainer from './FullPageContainer';

const AnimatedFull = animated(FullPageContainer);

class AnimatedRoute extends React.PureComponent {
  render() {
    const { style, full, ...props } = this.props;

    return (
      <AnimatedFull style={style} full={full}>
        <Route {...props} />
      </AnimatedFull>
    );
  }
}

export default AnimatedRoute;
